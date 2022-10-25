const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");

const { User, Post } = require("../models"); //구조분해할당으로 (models/index.js에서 export한)db에서 User만을 가져온다.
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");
const router = express.Router();

//passport>local에서 로그인이 성공됐다면 다시 콜백으로 와서
//미들웨어 확장
router.post("/login", isNotLoggedIn, (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      // err: 서버에러
      console.error(err);
      return next(err);
    }
    if (info) {
      // info: 클라이언트 에러
      return res.status(401).send(info.reason); //401: 허가되지않음
    }

    //passport 로그인 :  req.login
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      } //여기서 에러가 나지 않으면
      // res.setHeader('Cookie', 'xlyz'); - 랜덤한 문자열 쿠키를 보내준다 -> 알아서 세션과 연결해줌  | 서버쪽에서 정보를 통째로 들고있고 프론트쪽에서는 쿠키만 준다. 쿠키에는 아이디만 매칭해둔다.

      const fullUserWithoutPassword = await User.findOne({
        where: { id: user.id },
        attributes: {
          exclude: ["password"],
        },
        include: [
          {
            model: Post, //hasMany라서 model: Post가 복수형이 되어 me.Posts가 된다.
          },
          {
            model: User,
            as: "Followings",
          },
          {
            model: User,
            as: "Followers",
          },
        ],
      });
      return res.status(200).json(fullUserWithoutPassword);
    });
  })(req, res, next);
});

// 회원가입
router.post("/", isNotLoggedIn, async (req, res) => {
  //POST /user/

  try {
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (exUser) {
      return res.status(403).send("이미 사용중인 아이디입니다."); //클라이언트에서 잘못 보내줬으니까 400
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    await User.create({
      //User.create은 비동기 함수이지만 await을 하여 동기함수처럼 끝나면 res.json()이 실행될 수 있게 한다.
      email: req.body.email, // 프론트에서 data.email이었던 것이 백으로 와서는 req.body.email로 바뀜
      nickname: req.body.nickname,
      password: hashedPassword,
    });

    res.status(201).send("ok"); //res.json();
  } catch (error) {
    console.error(error);
    next(error); //status 500
  }
});

router.post("/logout", isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.send("ok");
});

module.exports = router;

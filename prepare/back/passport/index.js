const passport = require("passport");
const local = require("./local");
const { User } = require("../models");

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id); //세션에 다 들고 있기 무거워서 user.id만 따로 저장
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({ where: { id } }); //id로 사용자정보 복구
      done(null, user); // req.user에 넣어준다
    } catch (error) {
      console.error(error);
      done(error);
    }
  });
  local();
};

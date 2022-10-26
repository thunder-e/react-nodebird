const express = require("express");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const passport = require("passport");
const morgan = require("morgan");

const postRouter = require("./routes/post");
const postsRouter = require("./routes/posts");
const userRouter = require("./routes/user");
const db = require("./models");
const passportConfig = require("./passport");

dotenv.config();
const app = express();
db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결 성공");
  })
  .catch(console.error);

passportConfig();

//use : express서버에 무언가 장착한다는 뜻
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:3060",
    credentials: true, //쿠키도 같이 전달
  })
);
app.use(express.json()); // front에서 json형태로 데이터를 보냈을때 req.body를 req.body안에 넣어줌
app.use(express.urlencoded({ extended: true })); //form으로 요청했을때 urlencoded방식으로 넘어오면 data를 req.body안에 넣어줌
// 미들웨어 4개
app.use(cookieParser("nodebirdsecret"));
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("hello express");
});

app.get("/api", (req, res) => {
  res.send("hello api");
});

app.use("/posts", postsRouter);
app.use("/post", postRouter); //prefix
app.use("/user", userRouter);

// 에러처리 미들웨어가 이쯤에 존재
// 에러페이지로 가게 하고싶으면 작성하여 바꾸어주어도 된다
// app.use((err, req, res, next) => {});

app.listen(3065, () => {
  console.log("서버 실행 중!!!!");
});

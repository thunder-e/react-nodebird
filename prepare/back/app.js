const express = require("express");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const passport = require("passport");
const postRouter = require("./routes/post");
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
app.use(
  cors({
    origin: "*",
    credentials: false,
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

app.get("/post", (req, res) => {
  res.json([
    { id: 1, content: "hello1" },
    { id: 1, content: "hello2" },
    { id: 1, content: "hello3" },
  ]);
});

app.use("/post", postRouter); //prefix
app.use("/user", userRouter);

app.listen(3065, () => {
  console.log("서버 실행 중!!!!");
});
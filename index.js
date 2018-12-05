// express 모듈 가져오기
const express = require("express");
// 라우트 모듈 가져오기
const routes = require("./routes/api");
// mongoose 모듈 가져오기
const mongoose = require("mongoose");

// express app 생성하기
const app = express();

// MongoDB에 연결하기
mongoose.connect(
  "mongodb://localhost:27017/todolist",
  { useNewUrlParser: true }
);
// mongoose의 기본 Promise(mPromise)를 node의 Promise로 교체
mongoose.Promise = global.Promise;
// findOneAndUpate 사용을 위해 deprecation 경고 해결하기
mongoose.set("useFindAndModify", false);

// application/json 타입의 body를 파싱하기 위한 미들웨어 등록
app.use(express.json());

// 라우트 초기화
app.use("/api", routes);

// 에러 핸들링 미들웨어 등록
app.use((err, req, res, next) => {
  // 상태코드 및 에러 메시지 응답하기
  res.status(422).send({ error: err._message });
});

// 4000번 포트에서 요청 리스닝 하기
app.listen(4000, () => {
  console.log("now listening for requests : 4000 PORT");
});

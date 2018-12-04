// express 모듈 가져오기
const express = require("express");
// 라우트 모듈 가져오기
const routes = require("./routes/api");

// express app 생성하기
const app = express();

// 라우트 초기화
app.use("/api", routes);

// 4000번 포트에서 요청 리스닝 하기
app.listen(4000, () => {
  console.log("now listening for requests : 4000 PORT");
});

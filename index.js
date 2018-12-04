// express 모듈 가져오기
const express = require("express");

// express app 생성하기
const app = express();

// 4000번 포트에서 요청 리스닝 하기
app.listen(4000, () => {
  console.log("now listening for requests : 4000 PORT");
});

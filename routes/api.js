// express 모듈 가져오기
const express = require("express");
// 라우터 생성하기
const router = express.Router();
// 할일 모델 가져오기
const Todo = require("../models/todo");

// DB에서 할일 목록 가져오기
router.get("/todos", (req, res) => {
  res.send({ type: "GET" });
});
// DB에 신규 할일 추가하기
router.post("/todos", (req, res) => {
  // MongoDB에 신규 할일 추가하기
  Todo.create(req.body).then(todo => {
    res.send(todo);
  });
});
// DB에서 기존 할일 수정하기
router.put("/todos/:id", (req, res) => {
  res.send({ type: "PUT" });
});
// DB에서 기존 할일 삭제하기
router.delete("/todos/:id", (req, res) => {
  res.send({ type: "DELETE" });
});

module.exports = router;

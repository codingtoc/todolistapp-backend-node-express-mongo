// mongoose 모듈 가져오기
const mongoose = require("mongoose");
// Schema 생성
const Schema = mongoose.Schema;

// Todo 스키마 생성
const TodoSchema = new Schema({
  todo: {
    type: String,
    required: [true, "Todo field is required"]
  },
  done: {
    type: Boolean,
    default: false
  }
});

// Todo 모델 생성
const Todo = mongoose.model("todo", TodoSchema);

module.exports = Todo;

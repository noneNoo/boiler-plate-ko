const mongoose = require('mongoose');

//Schema 정의
const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true, // 스페이스 제거
    unique: 1, // 중복 불허용
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  // 회원 권한
  role: {
    type: Number,
    defalut: 0,
  },
  image: String, // 이렇게 하나만 적을 수 있다.
  // 유효성 관리
  token: {
    type: String,
  },
  // 유효기간
  tokenExp: {
    type: Number,
  },
});

// Model 정의
const User = mongoose.model('User', userSchema);

// 다른 파일에서 불러올 수 있게 export
module.exports = { User };

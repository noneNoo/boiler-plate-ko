const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const { User } = require('./models/User');

// bodyParser가 client의 정보를 서버로 분석하여 가져올 수 있게 설정해주는 코드
// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//application/json 타입을 분석하여 가져올 수 있게
app.use(bodyParser.json());

// mongoose 설정 코드
const mongoose = require('mongoose');
mongoose
  .connect(
    'mongodb+srv://noneno:dhWhfkrnd1%21@boilerplate.r3qet.mongodb.net/boilerplate?retryWrites=true&w=majority',
    // 두 번째 인자로 아래 객체를 넣는다. 에러 방지용
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.log(err));
// route
app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세여! 흠');
});

app.post('/register', (req, res) => {
  // 회원가입시 필요한 정보들을 client에서 가져오면
  // 그것들을 database에 넣어준다.

  // bodyParser를 이용하여 client에서 가져온 정보
  const user = new User(req.body);
  // 저장하기
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// 환경 변수에 따라 어떤 식으로 보안파일을 가져올 것인지
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}

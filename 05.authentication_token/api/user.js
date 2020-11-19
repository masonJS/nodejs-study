const ipInfo = require('ipinfo')
const crypto = require('crypto')
const USER = require('../service/user')

async function signup(req, res){

  // 1. req.body 데이터 유효성 검사
  // 커스텀한 유효성 검사 로직 또는 joi npm 사용
  // https://joi.dev/api/?v=17.3.0

  // 2. 비밀번호 단방향 암호화
  // random salt 값 생성
  // pbkdf2 암호화
  req.body.password = USER.encryptPassword(req.body.password)

  // 3. DB 데이터 insert 로직
  await USER.signup(req.body)
}


async function login(req, res) {

  // (optional) management user logging\
  USER.getDataToIP(req)
  await USER.createUserLog(req)

}


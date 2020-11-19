!function(){

  function signup(){

  }

  function encryptPassword(password){
    const CRYPTO = {
      size: 64,
      iterations: 100000,
      keyLength: 64,
      digest: 'sha512'
    }
    const salt = crypto.randomBytes(CRYPTO.size).toString('base64')
    const digestKey = crypto.pbkdf2Sync(password, salt, CRYPTO.iterations, CRYPTO.keyLength, CRYPTO.digest).toString('base64')
    return {
      digestKey,
      salt
    }
  }

  function createUserLog(req){
    const ip = req.headers['X-Forwarded-For'].split(',').pop().trim()
    const cLog = ipInfo(ip).then(cLoc => cLoc).error(err => err)
    // cLog
    // { hostname, city, region, country .. }

    // DB 데이터 Insert 로직
  }

  const crypto = require('crypto')
  const ipInfo = require('ipinfo')

}()

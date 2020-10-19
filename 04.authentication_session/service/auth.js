const userModel = require('../model/user')
const bcrypt = require('bcrypt')

async function login(email, password) {
  try {
    const user = await userModel.findUserByEmail(email)
    const isMatch = await bcrypt.compare(password, user.pwHash)
    return isMatch
      ? user
      : Promise.reject('wrong password')
  } catch (e) {
    return Promise.reject('user not found')
  }
}

module.exports = {
  login
}

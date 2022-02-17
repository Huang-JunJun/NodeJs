const { userModel } = require('./models/usersModel')

// 持久层
module.exports.login = function (user) {
  const result = userModel.find(user)
  return result
}
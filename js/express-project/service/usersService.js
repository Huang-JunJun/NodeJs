const { login } = require('../dao/usersDao')

module.exports.login = function (user) {
//  服务层
//  调用第三层usersDao的方法 操作数据库
  return login(user)
}
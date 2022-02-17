
// 数据库集合的相关配置
// 1. 定义数据集合的结构
// 定义出集合重的数据有哪些属性 属性的值是哪些类型
const { Schema, model } = require('mongoose')
const userSchema = new Schema({
  username: String,
  password: String
})

// 2.定义数据集合的模型： 将schema和数据库中的集合关联起来
// model('模型名称', Schema的名称, '数据库中的集合名称')
const userModel = model('userModel', userSchema, 'users')

module.exports = {
  userModel
}
var express = require('express');
var router = express.Router();

// 数据库集合的相关配置
// 1. 定义数据集合的结构
// 定义出集合重的数据有哪些属性 属性的值是哪些类型
const { Schema, model } = require('mongoose')
const usersSchema = new Schema({
  username: String,
  password: String
})

// 2.定义数据集合的模型： 将schema和数据库中的集合关联起来
// model('模型名称', Schema的名称, '数据库中的集合名称')
model('userModel', usersSchema, 'account')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res, next) {
  // 1.接受前端发送的数据
  // - post： req.body
  // - get: req.query
  // send方法处理响应结果给到前端
  // 接收到前端发送的用户数据
  const user = req.body
  res.send({
    msg: '登录成功',
    status: 200
  })
})

module.exports = router;

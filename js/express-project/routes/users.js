var express = require('express');
var router = express.Router();

const { login } = require('../service/usersService')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', async function(req, res, next) {
  // 1.接受前端发送的数据
  // - post： req.body
  // - get: req.query
  // send方法处理响应结果给到前端
  // 接收到前端发送的用户数据
  const user = req.body
  const result = await login(user)
  if (result.length !== 0) {
    res.send({
      msg: '登录成功',
      status: 200
    })
  } else {
    console.log('登录失败,账号或密码错误!')
  }
})

router.post('/register', async function(req, res, next) {
  const user = {
    username: req.body.username,
    password: req.body.password
  }
  const student = {
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender ? '男' : '女'
  }
  // const userResult = await userModel.save(user)
  // const studentResult = await studentModel.save(student)
  // console.log(userResult, studentResult);
})

module.exports = router;

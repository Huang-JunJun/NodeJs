var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res, next) {
  // 1.接受前端发送的数据
  // - post： req.body
  // - get: req.query
  // send方法处理响应结果给到前端
  res.send({
    msg: '登录成功',
    status: 200
  })
})

module.exports = router;

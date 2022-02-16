var express = require('express');
var router = express.Router();

let students = [
  {
    id: 1,
    name: '张三',
    age: 20,
    gender: '男'
  },
  {
    id: 2,
    name: '李四',
    age: 20,
    gender: '男'
  },
  {
    id: 3,
    name: '王五',
    age: 20,
    gender: '男'
  }
]

/* GET home page. */
router.get('/getStudents', function(req, res, next) {
  res.send({
    msg: '学生数据获取成功!',
    status: 200,
    data: students
  });
});

router.delete('/delStudents', function(req, res, next) {
  students = students.filter(item => {
    return item.id !== parseInt(req.body.id)
  })
  
  res.send({
    msg: '删除成功!',
    status: 1,
    data: students
  });
});

module.exports = router;

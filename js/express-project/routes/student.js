var express = require('express');
var router = express.Router();

const { Schema, model } = require('mongoose')
const studentSchema = new Schema({
  name: String,
  age: Number,
  gender: String
})
const studentModel = model('studentModel', studentSchema, 'students')

/* GET home page. */
router.get('/getStudents', async function(req, res, next) {
  const result = await studentModel.find({})
  const students = result.map(item => {
    return {
      id: item._id,
      name: item.name,
      age: item.age,
      gender: item.gender
    }
  })
  res.send({
    msg: '学生数据获取成功!',
    status: 200,
    data: students
  });
});

router.delete('/delStudents', async function(req, res, next) {
  const id = req.body.id
  const result = await studentModel.remove({ _id: id })
  if (result) {
    res.send({
      msg: '删除成功!',
      status: 1
    });
  }
});

module.exports = router;

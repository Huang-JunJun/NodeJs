
// 连接数据库
const mongoose = require('mongoose')
const dbURL = 'mongodb://localhost:27017/school' // 项目需要连接的mongodb数据库地址
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true})
// 当数据库被连接上触发
mongoose.connection.on('connected', function () {
  console.log(dbURL + '数据库连接成功');
})
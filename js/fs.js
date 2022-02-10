const fs = require('fs')

// 读取文件内容 回调函数
// 异步
fs.readFile('./test.txt', 'utf-8', function(err, data) {
  // console.log('err', err);
  // console.log('data', data);
  // 0 '' undefined null NaN 隐式转换都为false
  if (err) {
    console.log('读取文件失败');
  } else {
    console.log('读取文件成功');
    console.log(data);
  }
})

// 同步
try {
  const result = fs.readFileSync('./test.txt', 'utf-8')
  console.log('读取成功');
  console.log(result);
} catch (error) {
  console.log(error);
  console.log('读取失败');
}
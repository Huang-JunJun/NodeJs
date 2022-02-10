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

// 往文件中写入内容
// 新内容会覆盖旧内容
// 如果路径不对的话会创建新文件
fs.writeFile('./test.txt', '这是新写入的内容', function(err) {
  if (err) {
    console.log('写入文件失败');
  } else {
    console.log('写入文件成功');
  }
})
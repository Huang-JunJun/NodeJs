const http = require('http')
const fs = require('fs')

// request: 请求对象，包含了请求相关的数据和方法等
// response： 响应对象，包含了响应相关的数据和方法等
const app = http.createServer(function(request, response) {
  // response.write('hello');
  fs.readFile('./index.html', 'utf-8', (err, data) => {
    response.write(data)
    response.end()
  })
});

app.listen(3000, () => {
  console.log('3000端口启动成功');
})
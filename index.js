// const fs = require('fs')
// const path = require('path')
// const pathStr=path.join(__dirname,'./test.txt')
// fs.readFile(pathStr, 'utf8', function (err, text) {
//   if (err) {
//     return console.log('文件读取失败'+err.message)
//   }
//   console.log(text)
// })
// // fs.writeFile(pathStr, 'hello world', 'utf8', function (err, data) {
// //   if (err) {
// //     return console.log(err.message)
// //   }
// //   console.log(data)
// // })
// const http = require('http')
// const server = http.createServer()
// server.on('request', function (req,res) {
//   console.log('有人访问服务器')
//   console.log(req.url, req.method)
//   res.setHeader('Content-type','text/html;charset=utf-8')
//   res.end('欢迎')
// })
// server.listen(80, function () {
//   console.log('服务器已经启动，端口号http://127.0.0.1')
// })
const test=require('./custom.js')
const express = require('express');
const app = express();

app.use(express.json()) // 官方中间件, 将请求的JSON body 解析成一个对象返回出来
app.use(express.raw()) // 处理二进制流参数
app.use(express.Router()) // 创建一个新的路由对象
app.use(express.text()) // 将参数转化为文本字符串
app.use(express.static('yyy')) // 设置访问静态资源的目录
app.use(express.urlencoded()) // 将请求 content-type=x-www-form-urlencoded 的参数转化成 request.body

app.use((request, response, next) => {
  console.log('request.body')
  console.log(request.body)
  console.log(typeof request.body)  // object
  response.send('hi')
  request.on('data', (chunk) => {
    console.log(chunk.toString())
  })
  next()
})

app.listen(3000, () => {
  console.log('监听 3000 端口成功!')
})
const express = require('express');
const app = express();
const fn1 = require('./fn1')

app.set('case sensitive routing', true) // 路径请求大小写敏感, 需要在第一个中间件使用
app.set('views', 'views') // 设置视图目录
app.set('view engine', 'ejs') // 设置默认视图引擎

app.locals.title = '我的个人网站'

app.use(express.json()) // 官方中间件, 将请求的JSON body 解析成一个对象返回出来
app.use(express.raw()) // 处理二进制流参数
app.use(express.Router()) // 创建一个新的路由对象
app.use(express.text()) // 将参数转化为文本字符串
app.use(express.static('yyy')) // 设置访问静态资源的目录
app.use(express.urlencoded()) // 将请求 content-type=x-www-form-urlencoded 的参数转化成 request.body

// app.get('/test', (request, response, next) => {
//   response.render('test', { title: app.locals.title })
//   next()
// })
// 上面注释的和下面这一行相同功能
// app.use(fn1)


app.get('/style.css', (request, response, next) => {
  response.send('style.css')
  next()
})

app.post('/test', (request, response, next) => {
  response.send('post /test')
  next()
})

app.put('/test', (request, response, next) => {
  response.send('put /test')
  next()
})

app.delete('/test', (request, response, next) => {
  response.send('delete /test')
  next()
})

app.patch('/test', (request, response, next) => {
  response.send('patch /test')
  next()
})

// express.json() 的实现
// app.use((request, response, next) => {
//   console.log('request.body')
//   console.log(request.body)
//   console.log(typeof request.body)  // object
//   response.send('hi')
//   request.on('data', (chunk) => {
//     console.log(chunk.toString())
//   })
//   next()
// })

app.get('/users/:id', (request, response, next) => {
  console.log('request.params')
  console.log(request.params)
  response.send('hi')
  next()
})

app.listen(3000, () => {
  console.log('监听 3000 端口成功!')
})
const fn1 = (request, response, next) => {
  response.render('test', { title: request.app.locals.title })
  next()
}

module.exports = fn1
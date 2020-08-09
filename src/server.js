const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses } = require('./pages.js')

//config nunjcuks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
// configuration of static files
.use(express.static("public"))
// routes and app
.get('/', pageLanding)
.get('/study', pageStudy)
.get('/give-classes', pageGiveClasses)
// start server
.listen(5500)

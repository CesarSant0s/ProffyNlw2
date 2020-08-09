const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages.js')

//config nunjcuks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server

.use(express.urlencoded({ extended: true }))
// configuration of static files
.use(express.static("public"))
// routes and app
.get('/', pageLanding)
.get('/study', pageStudy)
.get('/give-classes', pageGiveClasses)
.post('/save-classes', saveClasses)
// start server
.listen(5500)

const proffys = [
    {
        name: "César Santos",
        avatar:"https://avatars2.githubusercontent.com/u/45637124?s=460&u=3c1aceac07ff18de6cf7620fddcd101ccf2841a0&v=4", 
        whatssap:"",
        bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões",
        subject:"Programação",
        cost:"30",
        weekday: [
            0
        ],
        time_from:[
            720
        ],
        time_to: [
            1220
        ]
    },
    {
        name: "Daniele Evangelista",
        avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatssap:"",
        bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões",
        subject:"Química",
        cost:"40",
        weekday: [
            0
        ],
        time_from:[
            720
        ],
        time_to: [
            1220
        ]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Portugês",
    "Química"
  ]
  
  const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ]

function getSubject(subjectNumber) {
    const index =subjectNumber + 1
    return subjects[index]
}



function pageLanding(req,res) {
    return res.render('index.html')
}

function pageStudy(req,res) {
    const filters = req.query

    return res.render('study.html', {proffys, filters, subjects, weekdays})
}
function pageGiveClasses(req,res) {
    const data = req.query

    

    const isNotEmpty = Object.keys(data).length > 0
    if (isNotEmpty){
        
        data.subject = getSubject(data.subject)
        
        proffys.push(data)

        return res.redirect('/study')
    }
    

    return res.render('give-classes.html',{subjects, weekdays})
}

const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

//config nunjcuks
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

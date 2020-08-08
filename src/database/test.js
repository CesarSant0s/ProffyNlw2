const Database = require('./db.js');
const createProffy = require('./createProffy.js')


Database.then( async (db)=> {
    // isert data

    proffyValue = {
        name: '',
        avatar: 'https://avatars2.githubusercontent.com/u/45637124?s=460&u=3c1aceac07ff18de6cf7620fddcd101ccf2841a0&v=4',
        whatsapp: '326546546',
        bio: 'Dev redy to lounch'
    }

    classValue = {
        subject:"Programação",
        cost:"30"
    }

    classScheduleValues = [

        {
            weekday: 1,
            time_from:720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from:520,
            time_to: 1220
        }
    ]

    // query entered data
    //await createProffy(db, {proffyValue,classValue,classScheduleValues})
    
    
})
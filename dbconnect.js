const mongoose = require('mongoose')
const URL = 'mongodb+srv://ballaveekshitanaidu07:ApEksPhPGiandvPE@cluster0.mfwcirl.mongodb.net/shareResume'

mongoose.connect(URL, {useUnifiedTopology : true, usenewUrlParser: true})

const connection = mongoose.connection

connection.on('connected', () => {
    console.log("connection to mongodb successful")
})

connection.on('error', (error) => {
    console.log("errorr")
})
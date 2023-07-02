const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    username:{
        type: 'String',
        required: true
    },
    password:{
        type : 'String', 
        required: true
    },
    firstName: {
        type :'String',
        default : '',
    },
    lastName : {
        type: 'String',
        default : '',
    },
    email : {
        type: 'String',
        default : '',
    },
    mobilenumber : {
        type: 'String',
        default : '',
    },
    objective : {
        type: 'String',
        default : '',
    },
    portifolio : {
        type: 'String',
        default : '',
    },
    address: {
        type : 'String',
        default : '',
    },
    education : [],
    skills : [],
    Experience : [],
    projects : []

},
    {
        timeStamps: true,
    }
)

const User = mongoose.model('users', UserSchema)

module.exports = User
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
    nome:{
        type: String,
    },
    email:{
        type:String,
    },
    cpf:{
        type: String,
    },
    upDate:{
        type: Date,
        default: Date.now()
    }
})
mongoose.model('User', User)
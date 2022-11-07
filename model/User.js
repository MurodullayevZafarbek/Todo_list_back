const {model,Schema} = require('mongoose')

module.exports = model("user",new Schema({
    name:{
        type:String,
        required:true,
    },
    login:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
},{timestamps:true}))

const {model,Schema} = require('mongoose')

module.exports = model("category",new Schema({
    name:{
        type:String,
        require:true
    },
    color:{
        type:String,
        default:"grey"
    },
    list:[
        {
            title:{
                type:String,
                require:true
            },
            status:{
                type:Boolean,
                default:false
            }
        }
    ],
    userId:{
        type:Schema.ObjectId,
        ref:"user"
    }
},{timestamps:true}))

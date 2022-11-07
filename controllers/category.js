const Category = require("../model/Category")
let controllers = {}

/*Get All Categorys*/
/*Hamma categoriylarni olish*/
controllers.getAllCategory = async (req, res, next) => {
    try{
        // let data = await Category.find({})
        // res.json({title:"All category",data}).status(200)

        // Category.find({}).then(data=>{
        //     res.json({title:"All category",data}).status(200)
        // })
        Category.find({userId:req.user.id},(err,data)=>{
            res.json({title:"All category",data}).status(200)
        })
    }catch(e){
        res.json({title:"ERROR",message:e.message}).status(e.status)
    }
}

/*Get One Categorys*/
/*Bitta categoriyni olish*/
controllers.getOneCategory = async(req, res, next) => {
    try{
        let data = await Category.find({_id:req.params.id})
        // let data = await Category.findById(req.params.id)
        res.json({title:"One spicial category",data}).status(200)
    }catch(e){
        res.json({title:"ERROR",message:e.message}).status(e.status)
    }
}

/*Get One Categorys*/
/*Bitta categoriyni olish*/
controllers.postOneCategory = async (req, res, next) => {
    try{
        let {name} = req.body
        new Category({
            name,
            userId:req.user.id
        }).save(data=>{
            res.json({title:"Data added",data})
        })
    }catch(e){
        res.json({title:"Error",mesaage:e.mesaage})
    }
}

/*DELETE One Category*/
/*Bitta categoriyni O`chirish*/
controllers.deleteOneCategory = async (req, res, next) => {
    try{
        let data = await Category.findByIdAndDelete(req.params.id)
        res.json({title:"Category deleted",data}).status(200)
    }catch(e){
        res.json({title:"Error",mesaage:e.mesaage})
    }
}

/*UPDATE One Category*/
/*Bitta categoriyni Yangilash*/
controllers.updateOneCategory = async (req, res, next) => {
    try{
        let {color} = req.body
        let data = await Category.findByIdAndUpdate(req.params.id,{color})
        res.json({title:"Data Updated",data})
    }catch(e){
        res.json({title:"Error",mesaage:e.mesaage})
    }
}

/*POST One Category Item*/
/*Bitta categoriy Item Q`shish*/
controllers.postOneCategoryItem = async (req, res, next) => {
    try{
        let {title} = req.body
        let data = await Category.updateOne({_id:req.params.id},{$push:{list:{title}}})
        res.json({title:"Item Data added",data})
    }catch(e){
        res.json({title:"Error",mesaage:e.mesaage})
    }
}

/*DELETE One Category Item*/
/*Bitta categoriy Item O`chirish*/
controllers.deleteOneCategoryItem = async (req, res, next) => {
    try{
        let {id,itemId} = req.params
        let data = await Category.updateOne({_id:id},{$pull:{list:{_id:itemId}}})
        res.json({title:"Item Data deleted",data})
    }catch(e){
        res.json({title:"Error",mesaage:e.mesaage})
    }
}

/*UPDATE One Category Item*/
/*Bitta categoriyni Itemini Yangilash*/
controllers.updateOneCategoryItem = async (req, res, next) => {
    try{
        let {status} = req.body
        let {id,itemId} = req.params
        let data = await Category.updateOne({_id:id,"list._id":itemId},{$set:{"list.$.status":status}})
        res.json({title:"Item Data Updated",data})
    }catch(e){
        res.json({title:"Error",mesaage:e.mesaage})
    }
}


module.exports = controllers
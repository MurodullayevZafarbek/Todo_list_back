isEmpty = async (req, res, next) => {
    for (item in req.body) {
        if(req.body[item].length==0){
            res.json({
                title:"ERROR",
                message:"Fill the form"
            })
            break;
        }
    }
    next()
}

module.exports=isEmpty
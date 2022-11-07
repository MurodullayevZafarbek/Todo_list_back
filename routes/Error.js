const { Router } = require('express')
const router = Router()

/*Error page*/
router.get('/',(req,res,next)=>{
   res.json({message:"Page not found"}).status(404)
})

module.exports = router
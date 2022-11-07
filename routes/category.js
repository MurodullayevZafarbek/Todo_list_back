const { Router } = require('express')

// Controllers
const {
    getAllCategory, 
    getOneCategory,
    postOneCategory,
    deleteOneCategory,
    updateOneCategory,
    postOneCategoryItem,
    deleteOneCategoryItem,
    updateOneCategoryItem
} = require('../controllers/category')

// middlewares
const isEmpty = require('../middleware/isEmpty')

const router = Router()

/*Get All Category*/
/*Hamma categoriylarni olish*/
router.get('/',getAllCategory)

/*Get One Categorys*/
/*Bitta categoriyni olish*/
router.get('/:id',getOneCategory)

/*POST One Category*/
/*Bitta categoriyni Qo`shihs*/
router.post('/',isEmpty,postOneCategory)

/*DELETE One Category*/
/*Bitta categoriyni O`chirish*/
router.delete('/:id',deleteOneCategory)

/*UPDATE One Category*/
/*Bitta categoriyni Yangilash*/
router.put('/:id',isEmpty,updateOneCategory)

/*POST One Category Item*/
/*Bitta categoriy Item Q`shish*/
router.post('/list/:id',isEmpty,postOneCategoryItem)

/*DELETE One Category Item*/
/*Bitta categoriy Item O`chirish*/
router.delete('/list/:id/:itemId',deleteOneCategoryItem)

/*PUT One Category Item*/
/*Bitta categoriy Item Update*/
router.put('/list/:id/:itemId',isEmpty,updateOneCategoryItem)


module.exports = router
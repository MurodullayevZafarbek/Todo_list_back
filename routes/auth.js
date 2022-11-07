const { Router } = require('express')
const router = Router()

// Controllers
const { 
    addOneUser, 
    checkOneUser,
    logOut,
} = require('../controllers/auth')

// middleware
const isEmpty = require('../middleware/isEmpty')


/*Post One User*/
/*Bitta foidalanuvchi qo`shish*/
router.post('/signup',isEmpty,addOneUser)

/*Check One User*/
/*Bitta foidalanuvchi tekshirish*/
router.post('/signin',isEmpty,checkOneUser)

/*Check One User*/
/*Bitta foidalanuvchi tekshirish*/
router.delete('/logout', logOut)

module.exports = router
const User = require('../model/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

let controllers = {}

/*Post One User*/
/*Bitta foidalanuvchi qo`shish*/
controllers.addOneUser = async (req, res, next) => {
   let user = await User.findOne({ login: req.body.login })
   if (user) {
      res.json({ title: "Already exsist", message: "exsist" }).status(200)
   } else {
      try {
         let hash = await bcrypt.hash(req.body.password, 10)
         let data = await User.create({ ...req.body, password: hash })
         res.json({ title: "User added", data }).status(200)
      } catch (e) {
         res.json({ title: "ERROR", message: e.message }).status(e.status)
      }
   }
}

/*Check One User*/
/*Bitta foidalanuvchi tekshirish*/
controllers.checkOneUser = async (req, res, next) => {
   try {
      let { login, password } = req.body
      let data = await User.findOne({ login })
      if (data == null) {
         res.json({ title: "User not found" }).status(200)
      } else {
         bcrypt.compare(password, data.password, async (err, compare) => {
            if (err) throw err
            if (compare) {
               let payload = { id: data._id }
               let token = await jwt.sign(payload, process.env.SECRETKEY,)
               res.json({ title: "Success", data: token }).status(200)
            } else {
               res.json({ title: "Danger", message: "Pasword wrong" }).status(200)
            }
         })
      }
   } catch (e) {
      res.json({ title: "ERROR", message: e.message }).status(e.status)
   }
}  

controllers.logOut = async (req, res, next) => {
   try {
      let token = await req.query.token || req.body.token || req.headers["x-access-token"];
      console.log(req,"asdasf");
      let data = await jwt.destroy(token)
   } catch (e) {
      res.json({ title: "ERROR", message: e.message }).status(e.status)
   }
}

module.exports = controllers
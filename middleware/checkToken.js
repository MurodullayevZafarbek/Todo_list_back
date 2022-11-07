const JWT = require ("jsonwebtoken");
const User = require("../model/User");

module.exports = checkToken = async (req, res, next) => {
    let token = await req.query.token ||  req.body.token ||  req.headers["x-access-token"];

    if (!token) {
        res.json({
            message: "No authorize to access this route  12132123"
        })
    }else {
        try {
            //verify token
            const decoded = JWT.verify(token, process.env.SECRETKEY);
            req.user = await User.findById(decoded.id);
            next()
        } catch (err) {
                res.json({
                   message: "No authorize to access this route1",
                   err:err.message
                })
        }
    }
}
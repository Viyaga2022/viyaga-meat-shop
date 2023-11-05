const jwt = require('jsonwebtoken')
const ash =  require('express-async-handler')
const User = require('../models/userModel')

const protect = ash(async(req,res,next) => {
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        let token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        req.user = await User.findOne({_id:decode.id}).select('-password')
        if(!req.user) {
            return res.status(404).json({message:"InValid Token"})
        }
        next()
    } else {
        res.status(404).json({message:"Not Authorized"})
    }
})   

module.exports = { protect }
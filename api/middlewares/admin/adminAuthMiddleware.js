const jwt = require('jsonwebtoken')
const ash = require('express-async-handler')
const Admin = require('../../models/admin/adminModal')
const subAdmin = require('../../models/admin/subAdminModal')

const adminProtect = ash(async (req, res, next) => {
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        let token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, process.env.COMPANY_JWT_SECRET)
        const masterAdmin = await Admin.findOne({ _id: decode.id }).select('-password')

        if (!masterAdmin) {
            const subAdmin = await subAdmin.findOne({ _id: decode.id }).select('-password')
        }

        req.admin = masterAdmin || subAdmin

        if (!req.admin) {
            return res.status(404).json({ message: "InValid Token" })
        }

        req.company = await Admin.findOne({ "adminEmail": { $exists: true } }).select('-password -adminEmail')
        next()
    } else {
        res.status(404).json({ message: "Not Authorized" })
    }
})

module.exports = { adminProtect }
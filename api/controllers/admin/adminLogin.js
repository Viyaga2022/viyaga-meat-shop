const ash = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const Admin = require('../../models/admin/adminModal')
const subAdmin = require('../../models/admin/subAdminModal')

// Admin Login  =============================================

const loginAdmin = ash(async (req, res) => {
    console.log("Admin Login Request")
    const { email, password } = req.body
    const masterAdmin = await Admin.findOne({ "adminEmail": email })

    if (!masterAdmin) {
        const subAdmin = await subAdmin.findOne({ "adminEmail": email })
    }

    const admin = masterAdmin || subAdmin

    if (!admin || !email || !password) {
        return res.status(404).json({ message: "Sorry, we couldn't find account with this email and password." })
    }

    const passwordValidation = await bcrypt.compare(password, admin.adminPassword)

    if (passwordValidation) {
        const token = generateJwt(admin.id)
        console.log({ token });
        return res.status(201).json({ token, message: "Login Successfull" })
    } else {
        return res.status(404).json({ message: "Sorry, we couldn't find account with this email and password." })
    }
})

const generateJwt = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

module.exports = { loginAdmin }
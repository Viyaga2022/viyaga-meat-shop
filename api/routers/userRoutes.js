const express = require('express')
const router = express.Router()

const { registerUser, verifyEmail, loginUser, getUserAccount } = require('../controllers/userController')
const { protect } = require('../middlewares/authMiddleware')

router.post('/login', loginUser)
router.post('/register', registerUser)
router.get('/verify/:token', verifyEmail)
router.get('/getUserAccount', protect, getUserAccount)

module.exports = router
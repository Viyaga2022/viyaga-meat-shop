const express = require('express')
const { getAllAddressesOfUser , addUserAddress, getSingleAddressesOfUser, updateUserAddress, deleteUserAddress } = require('../controllers/userAddressController')
const { protect } = require('../middlewares/authMiddleware')

const router = express.Router()

router.get('/', protect, getAllAddressesOfUser)
router.get('/:index', protect, getSingleAddressesOfUser)
router.post('/', protect, addUserAddress)
router.put('/:index/:id', protect, updateUserAddress)
router.delete('/:id', protect, deleteUserAddress)

module.exports = router
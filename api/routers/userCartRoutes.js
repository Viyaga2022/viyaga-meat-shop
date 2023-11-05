const express = require('express')
const { protect } = require('../middlewares/authMiddleware')
const { getAllCartItems, addCartItem, updateCartItem, deleteCartItem } = require('../controllers/userCartController')

const router = express.Router()

router.get('/', protect, getAllCartItems)
router.post('/', protect, addCartItem)
router.put('/:id', protect, updateCartItem)
router.delete('/:id', protect, deleteCartItem)

module.exports = router
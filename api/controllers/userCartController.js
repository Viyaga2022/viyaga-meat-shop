const ash = require('express-async-handler')

const User = require('../models/userModel')

const getAllCartItems = ash( async(req,res) => {
    res.status(200).json({address:req.user.address})
})

// Add User Address
const addCartItem = ash(async (req, res) => {
    
    const { fullName, mobileNo, pincode,
        state, city, houseNo, street, landmark } = req.body

    if (!fullName || !mobileNo || !pincode || !state || !city ||
        !houseNo || !street || !landmark) {
           return res.status(200).json({ message: "Please Enter The Required Field", isSaved:false})
    } else {
        const address = {name:fullName, mobileNo, houseNo, street, landmark, city, state, pincode}
        req.user.address.push(address)
        await req.user.save()
        console.log(req.user);
        return res.status(200).json({ message: "Address Saved Successfully", isSaved:true})
    }
})

//Update user Address
const updateCartItem = ash( async(req,res) => {
    const id = req.params.id
    await User.address.updateOne({_id:id},{...req.body})
    res.status(200).json({message: "Address Updated Successfully"})
})

//Delete user address
const deleteCartItem = ash( async(req,res) => {
    const id = req.params.id
    const address = req.user.address.find((item) => item.id === id)
    res.status(200).json({address})
})

module.exports = { getAllCartItems, addCartItem, updateCartItem, deleteCartItem }
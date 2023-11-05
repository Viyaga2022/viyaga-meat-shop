const ash = require('express-async-handler')

const User = require('../models/userModel')

const getAllAddressesOfUser = ash(async (req, res) => {
    res.status(200).json({ address: req.user.address })
})

const getSingleAddressesOfUser = ash(async (req, res) => {
    const index = req.params.index
    res.status(200).json({ address: req.user.address[index] })
})

// Add User Address
const addUserAddress = ash(async (req, res) => {

    const { fullName, mobileNo, pincode,
        state, city, houseNo, street, landmark } = req.body

    if (!fullName || !mobileNo || !pincode || !state || !city ||
        !houseNo || !street || !landmark) {
        return res.status(401).json({ message: "Please Enter The Required Field" })
    } else {
        const address = { fullName, mobileNo, houseNo, street, landmark, city, state, pincode }
        req.user.address.push(address)
        await req.user.save()

        return res.status(200).json({ address: req.user.address, message: "Address Saved Successfully" })
    }
})

//Update user Address
const updateUserAddress = ash(async (req, res) => {
    const { index, id } = req.params
    const { fullName, mobileNo, pincode,
        state, city, houseNo, street, landmark } = req.body

    if (!fullName || !mobileNo || !pincode || !state || !city ||
        !houseNo || !street || !landmark) {
        return res.status(401).json({ message: "Please Enter The Required Field" })
    }

    updAddress = {
        id, fullName, mobileNo, pincode,
        state, city, houseNo, street, landmark
    }
    req.user.address[index] = updAddress

    await req.user.save()
    res.status(200).json({ address: req.user.address, message: "Address Updated Successfully" })
})

//Delete user address
const deleteUserAddress = ash(async (req, res) => {
    const id = req.params.id
    const filteredAddress = req.user.address.filter((item) => item.id !== id)
    req.user.address = filteredAddress
    await req.user.save()

    res.status(200).json({ address: req.user.address })
})

module.exports = { getAllAddressesOfUser, getSingleAddressesOfUser, addUserAddress, updateUserAddress, deleteUserAddress }
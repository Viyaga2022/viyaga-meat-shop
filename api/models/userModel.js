const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        verified: {
            type: Boolean,
            default: false,
        },

        verificationToken: String,

        address: [{
            fullName: {
                type: String,
                required: true,
            },
            mobileNo: {
                type: String,
                required: true,
            },
            houseNo: {
                type: String,
                required: true,
            },
            street: {
                type: String,
                required: true,
            },
            landmark: {
                type: String,
            },
            city: {
                type: String,
                required: true,
            },
            state: {
                type: String,
            },
            country: {
                type: String,
                default: "India"
            },
            pincode: {
                type: String,
                required: true,
            }
        }],

        cart: [{
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
            },
            productName: {
                type: String,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
            image: {
                type: String,
                required: true,
            }
        }],

        wishList: [{
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
            },
            productName: {
                type: String,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
            image: {
                type: String,
                required: true,
            }
        }],

        orders: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Order"
            }
        ],
    },
    {
        timestamps: true,
    },
)

module.exports = mongoose.model("User", userSchema)
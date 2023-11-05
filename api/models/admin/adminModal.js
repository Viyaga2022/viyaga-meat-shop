const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema(
    {
        adminName: {
            type: String,
            required: true,
        },
        adminEmail: {
            type: String,
            required: true,
        },
        adminPassword: {
            type: String,
            required: true
        },
        companyName: {
            type: String,
            required: true,
        },
        companyLogo: {
            type: String,
            required: true,
        },
        productCategories: [{
            categorieName: {
                type: String,
                required: true,
            },
            categorieImage: {
                type: String,
                required: true,
            }
        }],
        carousel: [{
            imageName: {
                type: String,
                required: true,
            },
            image: {
                type: String,
                required: true,
            }
        }],
    },
    {
        timestamps: true,
    },
)

module.exports = mongoose.model('Admin', adminSchema)
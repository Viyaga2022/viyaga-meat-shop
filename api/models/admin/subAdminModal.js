const mongoose = require('mongoose')

const subAdminSchema = new mongoose.Schema(
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
    },
    {
        timestamps: true,
    },
)

module.exports = mongoose.model('subAdmin', subAdminSchema)
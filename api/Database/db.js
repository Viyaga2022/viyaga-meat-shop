const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Db Connected")
    } catch (e){
        console.log(`Db connection failed, ${e}`)
    }  
}

module.exports = connectDB;
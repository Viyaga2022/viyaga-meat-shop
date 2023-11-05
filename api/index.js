const express = require('express')
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require('cors')

const userRouter = require('./routers/userRoutes')
const userAddressRouter = require('./routers/userAddressRoutes')
const userCartRouter = require('./routers/userCartRoutes')
const errorHandler = require('./middlewares/errorMiddleware')
const connectDB = require('./Database/db')

const app = express()
const port = process.env.PORT
connectDB()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'));
console.log(__dirname)
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/user', userRouter)
app.use('/api/userAddress', userAddressRouter)
app.use('/api/userCart', userCartRouter)

app.get('/api/hello', (req, res) => {
    res.status(200).send("Hello API")
})

app.use(errorHandler)
app.listen(port, () => {
    console.log(`app running on port ${port}`)
})
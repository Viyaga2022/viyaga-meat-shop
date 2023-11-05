const ash = require('express-async-handler')

const getAllCarousel = ash(async(req,res) => {
    res.status(200).json({carousel:req.company.carousel})
})

const getSingleCarousel = ash(async(req,res) => {
    const { index } = req.params
   
})

const addCarousel = ash(async(req,res) => {

})

const updCarousel = ash(async(req,res) => {

})

const deleteCarousel = ash(async(req,res) => {

})

module.exports = { 
    getAllCarousel,
    getSingleCarousel,
    addCarousel,
    updCarousel,
    deleteCarousel,
}
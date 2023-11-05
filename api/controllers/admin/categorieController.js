const ash = require('express-async-handler')

const getAllCategorie = ash(async (req, res) => {
    res.status(200).json({ categorie: req.company.productCategories })
})

const getSingleCategorie = ash(async (req, res) => {
    const { index } = req.body
    if (!req.company.categorie[index]) {
        return res.status(404).json({ message: "Categorie Not Found" })
    }
    res.status(200).json({ singleCategorie: req.company.categorie[index] })
})

const addCategorie = ash(async (req, res) => {
    const { categorieName, categorieImage } = req.body

    if (!categorieName || !categorieImage) {
        return res.status(401).json({ message: 'Please Enter The Required Field' })
    }

    req.company.productCategories.push({ categorieName, categorieImage })
    await req.company.save()
    res.status(200).json({ categorie: req.company.productCategories, message: 'Categorie Added Successfully' })
})

const updCategorie = ash(async (req, res) => {
    const { id, index } = req.params
    const { categorieName, categorieImage } = req.body

    if (!categorieName || !categorieImage) {
        return res.status(401).json({ message: 'Please Enter The Required Field' })
    }

    req.company.productCategories[index] = { categorieName, categorieImage }
    await req.company.save()
    res.status(200).json({ categorie: req.company.productCategories, message: "Categorie Updated Successfully" })
})

const deleteCategorie = ash(async (req, res) => {
    const { id } = req.params
    const updatedCategorie = req.company.productCategories.filter((item) => item.id !== id)
    req.company.productCategories = updatedCategorie
    await req.company.save()
    res.status(200).json({ categorie: req.company.productCategories, message: "Categorie Deleted Successfully" })
})

module.exports = {
    getSingleCategorie,
    getAllCategorie,
    addCategorie,
    updCategorie,
    deleteCategorie
}
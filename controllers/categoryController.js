const categoryModel = require('../models/categoryModel');

async function getAllCategories(req, res) {
    try {
        const categories = await categoryModel.getAllCategories();
        res.json(categories);
    } catch (err) {
        res.status(500).json({ error: 'Erreur lors de la récupération des catégories' });
    }
}

module.exports = {
    getAllCategories
};

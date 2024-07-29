const articleModel = require('../models/articleModel');

async function getArticle(req, res) {
    try {
        const { slug } = req.params;
        const article = await articleModel.getArticleBySlug(slug);
        if (!article) {
            return res.status(404).json({ error: 'Article non trouvé' });
        }
        res.json(article);
    } catch (err) {
        res.status(500).json({ error: 'Erreur lors de la récupération de l\'article' });
    }
}

async function createArticle(req, res) {
    try {
        const { title, slug, content, categoryId } = req.body;
        if (!title || !slug || !content || !categoryId) {
            return res.status(400).json({ error: 'Title, slug, content and categoryId are required' });
        }
        const articleId = await articleModel.createArticle(title, slug, content, categoryId);
        res.status(201).json({ message: 'Article créé avec succès', articleId });
    } catch (err) {
        res.status(500).json({ error: 'Erreur lors de la création de l\'article' });
    }
}

async function updateArticle(req, res) {
    try {
        const { slug } = req.params;
        const { title, content, categoryId } = req.body;
        const updatedRows = await articleModel.updateArticle(slug, title, content, categoryId);
        if (updatedRows === 0) {
            return res.status(404).json({ error: 'Article non trouvé' });
        }
        res.json({ message: 'Article mis à jour avec succès' });
    } catch (err) {
        res.status(500).json({ error: 'Erreur lors de la mise à jour de l\'article' });
    }
}

module.exports = {
    getArticle,
    createArticle,
    updateArticle
};

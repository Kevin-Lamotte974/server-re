const db = require('../config/database');

async function getArticleBySlug(slug) {
    const [rows] = await db.query('SELECT * FROM articles WHERE slug = ?', [slug]);
    return rows[0];
}

async function createArticle(title, slug, content, categoryId) {
    const [result] = await db.query('INSERT INTO articles (title, slug, content, categoryId) VALUES (?, ?, ?, ?)', [title, slug, content, categoryId]);
    return result.insertId;
}

async function updateArticle(slug, title, content, categoryId) {
    const [result] = await db.query('UPDATE articles SET title = ?, content = ?, categoryId = ? WHERE slug = ?', [title, content, categoryId, slug]);
    return result.affectedRows;
}

module.exports = {
    getArticleBySlug,
    createArticle,
    updateArticle
};

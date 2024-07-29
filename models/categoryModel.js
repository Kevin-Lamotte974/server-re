const db = require('../config/database');

async function getAllCategories() {
    const [rows] = await db.query('SELECT * FROM categories');
    return rows;
}

module.exports = {
    getAllCategories
};

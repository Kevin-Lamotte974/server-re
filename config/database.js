const mysql = require('mysql2/promise');
require('dotenv').config();

// const db = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// });

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'royaume-evralia'
});

db.getConnection()
    .then(connection => {
        console.log('Connecté à la base de données MySQL');
        connection.release();
    })
    .catch(err => {
        console.error('Erreur de connexion à la base de données:', err);
    });

module.exports = db;

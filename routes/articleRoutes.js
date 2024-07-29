const express = require('express');
const articleController = require('../controllers/articleController');

const router = express.Router();

router.get('/:slug', articleController.getArticle);
router.post('/', articleController.createArticle);
router.put('/:slug', articleController.updateArticle);

module.exports = router;

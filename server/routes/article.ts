const express = require('express');
const router = express.Router();
const { getArticles, getArticle } = require('../controllers/article');

router.get('/', getArticles);
router.get('/:slug', getArticle);

module.exports = router;

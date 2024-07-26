import {Request, Response} from 'express';
const asyncHandler = require('express-async-handler');
const Article = require('../models/Article');

const getArticles = asyncHandler(async(req: Request, res: Response) => {
    const articles = await Article.find();
    return res.status(200).json(articles);
});

const getArticle = asyncHandler(async(req: Request, res: Response) => {
    const {slug} = req.params;
    const article = await Article.findOne({slug});
    if (article) {
        res.status(200).json(article);
    } else {
        res.status(404).json({msg: 'No article found'});
    }
    return;
});

export { getArticles, getArticle };
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const ArticleRoutes = require('./routes/article');

const {connectToDB} = require('./config/connectToDB');
const port = process.env.PORT || 5001;

const start = () => {
    connectToDB(process.env.MONGO_URI).then(() => {
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`)
        })
    })
};

start();

app.use(express.json());
app.use(cors());
app.use('/articles', ArticleRoutes);


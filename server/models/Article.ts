const mongoose = require('mongoose');

const ArticleSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 2,
        max: 170
    },
    type: {
        type: String,
        enum: 'post' || 'project'
    },
    slug: {
        type: String,
        required: true,
        min: 2,
    },
    content: {
        type: String,
        required: true,
        min: 2,
    },
    icon: {
        type: String,
        required: true, 
    },
    tags: {
        type: [String],
    }
}, {timestamps: true});

module.exports = mongoose.model('Article', ArticleSchema);
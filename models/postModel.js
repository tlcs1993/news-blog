const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'A post must have a name'],
        unique: true,
    },
    author: {
        type: String,
        required: [true, 'A post must have an author'],
    },
    text: {
        type: String,
        required: [true, 'A post must have a text content'],
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;

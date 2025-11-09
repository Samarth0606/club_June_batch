const mongoose = require('mongoose');

// schema
let blogSchema = new mongoose.Schema({
    comment: String,
    author: String
})

// models
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    pages: {
        type: Number,
        required: true
    },
    publisher: {
        type: String,
        required: true
    }
});

const BookModel = mongoose.model('book', bookSchema);

module.exports = BookModel;
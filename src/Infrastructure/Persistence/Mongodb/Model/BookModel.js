const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
        id: {
            type: Number,
            required: true,
            unique: true
        },
        name: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true,
            unique: true
        },
        pages: {
            type: Number,
            required: true
        },
        publisher: {
            type: String,
            required: true
        }
    },
    {
        collection: 'book'
    });

const BookModel = mongoose.model('book', bookSchema);

module.exports = BookModel;
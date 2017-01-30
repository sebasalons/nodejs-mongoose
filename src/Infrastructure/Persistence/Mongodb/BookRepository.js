const BookModel = require('src/Infrastructure/Persistence/Mongodb/Model/BookModel');
const mongoose = require('mongoose');
const settings = require('src/Config/Settings');

class BookRepository {

    constructor()
    {
        mongoose.connect(settings.mongodb.url + settings.mongodb.database);
    }

    findBookById(id, callback)
    {
        BookModel.find({id: id}, function(err, book) {
            if (err || book.length == 0) {
               callback(new Error('Book Not Found'), null);
               return;
            }
            callback(null, book);
        });
    }

    findBooks(callback)
    {
        BookModel.find({}, function (err, books) {
            if (err || books.length == 0) {
                callback(new Error('Book Not Found'), null);
                return;
            }
            callback(null, books);
        });
    }

    save(book, callback)
    {
        var newBook = new BookModel({
            id: book.id,
            name: book.name,
            author: book.author,
            pages: book.pages,
            publisher: book.publisher
        });
        newBook.save(function(err, book) {
            if (err) {
                callback(new Error('Book not saved'), null);
                return;
            }
            callback(null, true);
        });
    }
}

module.exports = BookRepository;
const Book = require('src/Domain/Book');
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
           if (err || !book) {
               callback(new Error('Book Not Found'), null);
               return;
           }
           callback(null, book);
        });
    }

    findBooks(callback)
    {
        BookModel.find({}, function (err, books) {
            if (err || !books) {
                callback(new Error('Book Not Found'), null);
                return;
            }
            callback(null, books);
        });
    }

    save(book, callback)
    {
        callback(new Error('Not save book'), null);
    }
}

module.exports = BookRepository;
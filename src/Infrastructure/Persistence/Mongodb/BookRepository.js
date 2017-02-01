const BookModel = require('src/Infrastructure/Persistence/Mongodb/Model/BookModel');
const mongoose = require('mongoose');
const settings = require('src/Config/Settings');
const Book = require('src/Domain/Book');
const BookRespositoryFactory = require('src/Infrastructure/Persistence/Mongodb/BookRepositoryFactory');

class BookRepository {

    constructor()
    {
        mongoose.connect(settings.mongodb.url + settings.mongodb.database);
    }

    /**
     * Close connection mongoDB
     */
    close()
    {
        mongoose.connection.close();
    }

    /**
     * @param integer id
     * @param callback
     */
    findBookById(id, callback)
    {
        BookModel.find({id: id}, function(err, book) {
            if (err || book.length == 0) {
               callback(new Error('Book Not Found'), null);
               return;
            }
            var bookModel = BookRespositoryFactory.transformObjectToBook(book[0]);
            callback(null, bookModel);
        });
    }

    /**
     * @param callback
     */
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

    /**
     * @param array data
     * @param callback
     */
    save(data, callback)
    {
        var newBook = BookRespositoryFactory.transformArrayToModel(data);
        newBook.save(function(err, result) {
            if (err) {
                callback(new Error('Book not stored'), null);
                return;
            }
            callback(null, true);
        });
    }
}

module.exports = BookRepository;
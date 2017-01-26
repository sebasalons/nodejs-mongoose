const BookRepository = require('src/Infrastructure/Persistence/Mongodb/BookRepository');
const Book = require('src/Domain/Book');

module.exports = function(data, callback){
    /* VERIFY DATA */
    var book = new Book(
        data['id'],
        data['name'],
        data['author'],
        data['pages'],
        data['publisher']
    );
    var bookRepository = new BookRepository();
    bookRepository.save(book, callback);
};
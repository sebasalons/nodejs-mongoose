const BookRepository = require('src/Infrastructure/Persistence/Mongodb/BookRepository');

module.exports = function(id, callback){
    var bookRepository = new BookRepository();
    bookRepository.delete(id, callback);
    bookRepository.close();
};

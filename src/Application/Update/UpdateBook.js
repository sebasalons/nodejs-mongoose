const BookRepository = require('src/Infrastructure/Persistence/Mongodb/BookRepository');

module.exports = function(id,data, callback){
    var bookRepository = new BookRepository();
    bookRepository.update(id, data, callback);
    bookRepository.close();
};


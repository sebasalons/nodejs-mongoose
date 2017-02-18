const Book = require('src/Domain/Book');
let books = [
    new Book(1, 'Clean Code', 'Robert C. Martin', 288, 'FINANCIAL TIMES/PRENTICE HALL'),
    new Book(2, 'Building Microservices', 'Sam Newman', 280, 'O\'Reilly Media'),
    new Book(3, 'Pragmatic Programmer, The:From Journeyman to Master', 'Hunt Andrew', 352, 'ADDISON WESLEY LONGMAN INC DIV PEARSON SUITE 300'),
];

module.exports.findBookById = function(id, callback){
    let book = findBook(id);
    if(!book){
        callback(new Error('Book Not Found'), null);
        return;
    }
    callback(null, book);
};

module.exports.findBooks = function(callback){
    return callback(null, books);
};

module.exports.save = function(book, callback){
    let result = saveBook(book);
    if (!result) {
        callback(new Error('Book not stored'), null);
        return;
    }
    callback(null, result);
};

function findBook(bookId)
{
    for(let i = 0; i < books.length; i++){
        if(books[i].getId() === bookId){
            return books[i];
        }
    }
    return null;
}

function saveBook(book)
{
    books.push(new Book(book['id'], book['title'], book['author'], book['pages'], book['publisher']));
    return true;
}
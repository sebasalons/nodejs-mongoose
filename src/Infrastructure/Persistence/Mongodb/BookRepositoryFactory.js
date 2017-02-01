const BookModel = require('src/Infrastructure/Persistence/Mongodb/Model/BookModel');
const Book = require('src/Domain/Book');

/**
 * @param array data
 * @returns BookModel
 */
module.exports.transformArrayToModel = function(data)
{
    return new BookModel({
        id: data['id'],
        name: data['name'],
        author: data['author'],
        pages: data['pages'],
        publisher: data['publisher']
    });
};

/**
 * @param array data
 * @returns Book
 */
module.exports.transformObjectToBook = function(data)
{
    return new Book(
        data.id,
        data.name,
        data.author,
        data.pages,
        data.publisher
    );
};
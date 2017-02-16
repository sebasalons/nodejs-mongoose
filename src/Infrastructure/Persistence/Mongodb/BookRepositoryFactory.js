const Book = require('src/Domain/Book');

/**
 * @param data
 *
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
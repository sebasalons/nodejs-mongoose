const bodyParser = require('body-parser');
const express = require('express');
const api = express.Router();

/**
 * MIDDLEWARES
 */
api.use(function (req, res, next){
    console.log(req.ip, req.method, req.originalUrl);
    next();
});
api.use(bodyParser.urlencoded({ extended: false }));
api.use(bodyParser.json());

/**
 *  ENDPOINTS
 */

/**
 * Add book
 */
api.post('/book', function (req, res) {
    console.log('Creating book...');
    console.log(req.body);
    let data = req.body;
    let AddBook = require('src/Application/Save/AddBook');

    AddBook(data, (err, book) => {
        if(err){
            res.status(404).json(err.message);
            return;
        }

        res.json(book);
    });
});

/**
 * Find book by Id
 */
api.get('/book/:id', function (req, res) {
    console.log('Getting book: ', req.params.id);
    let id = req.params.id;
    let FindBookById = require('src/Application/Find/FindBookById');

    FindBookById(id, (err, book) => {
        if(err){
            res.status(404).json(err.message);
            return;
        }

        res.json(book);
    });
});

api.put('/book/:id', function (req, res) {
    let id = req.params.id;
    console.log('Update book: ' + id);
    console.log(req.body);
    let data = req.body;
    let UpdateBook = require('src/Application/Update/UpdateBook');

    UpdateBook(id, data, (err, book) => {
        if(err){
            res.status(404).json(err.message);
            return;
        }

        res.json(book);
    });

});

api.delete('/book/:id', function(req, res) {
    let id = req.params.id;
    console.log('Delete book: ' + id);
    let DeleteBook = require('src/Application/Delete/DeleteBook');
    DeleteBook(id, (err, book) => {
        if(err){
            res.status(404).json(err.message);
            return;
        }

        res.json(book);
    });
});

module.exports = api;

const express = require('express');
const api = express.Router();


/**
 * MIDDLEWARES
 */
api.use(function (req, res, next){
    console.log(req.ip, req.method, req.originalUrl);
    next();
});


/**
 *  ENDPOINTS
 */

api.get('/findBook/book/:id', function (req, res, next) {
    let id = req.params.id;
    console.log('Processing findBook 1...');
    res.json('Find book 1: ' + id);
});

module.exports = api;

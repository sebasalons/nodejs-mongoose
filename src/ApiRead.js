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
api.get('/book/:id', function (req, res) {
    let id = req.params.id;
    console.log('Processing find book...');
    res.json('Found book: ' + id);
});

module.exports = api;

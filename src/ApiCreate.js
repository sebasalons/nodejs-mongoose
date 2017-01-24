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
api.post('/book', function (req, res) {
    console.log('Processing create book...');
    console.log(req.body);
    res.json('Save correctly');
});

module.exports = api;

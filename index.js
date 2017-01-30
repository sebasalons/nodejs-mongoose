process.env.NODE_PATH = __dirname;
require('module').Module._initPaths();

const app = require('express')();
const apiBook = require('src/ApiBook');
const apiReserve = require('src/ApiReserve');
const settings = require('src/Config/Settings');

//Router configuration.
app.use('/api/' + settings.connection.version, apiBook);
app.use('/api/' + settings.connection.version, apiReserve);
app.listen(settings.connection.port, function () {
    console.log(`[Booking Persistable Service] running in port ${settings.connection.port}`);
});
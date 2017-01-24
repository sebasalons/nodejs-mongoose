process.env.NODE_PATH = __dirname;
require('module').Module._initPaths();

const app = require('express')();
const apiRead = require('src/apiRead');
const apiCreate = require('src/apiCreate');
const settings = require('src/Config/settings');

//Router configuration.
app.use('/api/' + settings.connection.version, apiRead);
app.use('/api/' + settings.connection.version, apiCreate);
app.listen(settings.connection.port, function () {
    console.log(`[Booking Persistable Service] running in port ${settings.connection.port}`);
});
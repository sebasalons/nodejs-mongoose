process.env.NODE_PATH = __dirname;
require('module').Module._initPaths();

const app = require('express')();
const apiRead = require('src/apiRead');
const apiCreate = require('src/apiCreate');
const version = '0.1',
      port = 3001;

//Router configuration.
app.use('/api/' + version, apiRead);
app.use('/api/' + version, apiCreate);
app.listen(port, function () {
    console.log(`[Booking Persistable Service] running in port ${port}`);
});
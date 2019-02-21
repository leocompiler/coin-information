'use strict';

global.config = { appRoot: __dirname }

let express = require('express')
let mongo = require('mongodb')
let monk = require('monk')
 
let bodyParser = require('body-parser')
let methodOverride = require('method-override')
let config = require('./config').Config
let logger = require('logger')
let resources = require('./routes/routes');
let schedulers = require('./scheduler/schedulers');




const app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 50000
}));



app.use(logErrors);
app.use(errorHandler);

app.use('/information', resources);





app.listen(config.PORT, config.HOST, function () {

    console.info("########################################################################");
    console.info("##                COIN INFORMATION  SERVIDOR INICIADO                 ##");
    console.info("########################################################################");
    console.info('URL HTTP: ', config.HOST + ":" + config.PORT);
 
});


function logErrors(err, req, res, next) {
    console.error(err);
    next(err);
}

function errorHandler(err, req, res, next) {
    var status = err.status || 500;
    res.status(status).send({
        erro: err.message
    });
}

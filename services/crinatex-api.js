'use strict'

let logger = require('logger').createLogger();

let config = require(global.config.appRoot + '/config').Config
let url = require('url');
let HTTP = require(global.config.appRoot + '/util/http');
let HTTPS = require(global.config.appRoot + '/util/https');
let tools = require(global.config.appRoot + '/util/tools');


module.exports = {


    informacaoUsuario: function (token) {


        let path = config.APIMANAGER_URL + "/crimatex/informacoes";


        let headers = {

            Authorization: "Bearer " + token,
            "Content-Type": "application/json"

        };


        let endpoint = url.parse(path);

        return HTTP.get(endpoint,headers);

    },




}
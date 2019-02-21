'use strict'

let logger = require('logger').createLogger();

let config = require(global.config.appRoot + '/config').Config
let url = require('url');
let HTTP = require(global.config.appRoot + '/util/http');
let HTTPS = require(global.config.appRoot + '/util/https');
let tools = require(global.config.appRoot + '/util/tools');


module.exports = {


    coins: async function ( ticket ) {

        try {
            let path = config.GATEWAY_WEBSOCKET + '/websocket/channel/public/COINS';


            let headers = {

                "Content-Type": "application/json"

            };


            let endpoint = url.parse(path);

            let resposta = await HTTP.put(endpoint, ticket, headers);
            return resposta
        } catch ( erro ) {
            return console.error( "COINS_INFORMATION_WEBSOCKET_CATH" + erro )            
        } 
    },




}
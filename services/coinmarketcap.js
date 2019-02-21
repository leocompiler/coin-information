'use strict'

let logger = require('logger').createLogger(); 

let url = require('url');
let HTTP = require(global.config.appRoot + '/util/http');
let HTTPS = require(global.config.appRoot + '/util/https');
const querystring = require('querystring');


module.exports = {

    /**
     * Get ticket informantion CoinMarkeCap
     */
    get: async function ( coins ) {
 

        let path =  'https://api.coinmarketcap.com/v2/ticker/' + coins.id + '/?' + querystring.stringify( { convert : coins.convert } )  
  
        let endpoint = url.parse(path);

        let resposta = await HTTPS.get( endpoint  );
        return JSON.parse( resposta )
    },

  

}
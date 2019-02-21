'use strict';
let logger = require('logger').createLogger();

module.exports = {

    genereateSession: function () {
        var length = 8,
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
    },

    configParams: function (params) {
        let query = '';
        for (let prop in params) {
            if (params[prop])
                query += `&${prop}=${params[prop]}`;
        }

        query = query.replace(/^&/, '?');

        return query;
    },
    isPrivateChannel: function (type) {

        //TODO: ESTES ITENS PRECISAO ESTAR EM BANCO DE DADOS .

        switch (type) {

            case "ORDEMS":
            case "TRANSACTIONS":
            case "BALANCES":
                return true;
            default:
                return false;
        }
    }

}
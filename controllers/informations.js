'use strict'

let logger = require('logger')
let url = require('url')
let tools = require(global.config.appRoot + '/util/tools')
let HTTP = require(global.config.appRoot + '/util/http')
let config = require(global.config.appRoot + '/config').Config

let tickets = require(global.config.appRoot + '/models/tickets')
 
  

module.exports = {
 
    coins: async function (req, res) {
 
        let itens = await tickets.filterByLastRegister(['BTC','ETH','LTC'])
        // let itens = await tickets.list('BTC')
 
        return res.status(201).send( itens )

    }
}
 
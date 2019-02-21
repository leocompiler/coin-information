'use strict'

let config = require(global.config.appRoot + '/config').Config
let logger = require('logger').createLogger()
let tickets = require(global.config.appRoot + '/models/tickets')
let service = require(global.config.appRoot + '/services/coinmarketcap');

let serviceWebsocket = require(global.config.appRoot + '/services/websocket');


module.exports = {

    /**
     * get detail by information coin tickets 
     */
    ethereum: async function () {
        try {

            let coins = { id: 1027, convert: "BRL", name: "ethereum" }

            let ticket = await service.get(coins)            

            let data = ticket.data

            let ticketCrimatex = convertLayout(data)

            let isOk = await tickets.register(ticketCrimatex)

            if (!isOk) {
                return console.error("COINS_INFORMATION_IS_NOT_SAVE_TICKET")
            }

            await serviceWebsocket.coins(ticket)



        } catch (erro) {
            console.error("WEBSOCKER_SCHEDULER_CLEAR_CATCH ", erro)
        }
    },

    /**
     * get detail by information coin tickets 
    */
    bitcoin: async function () {
        try {
            let coins = { id: 1, convert: "BRL", name: "bitcoin" }

            let ticket = await service.get(coins)
            
            let data = ticket.data

            let ticketCrimatex = convertLayout(data)

            let isOk = await tickets.register(ticketCrimatex)

            if (!isOk) {
                return console.error("COINS_INFORMATION_IS_NOT_SAVE_TICKET")
            }

            await serviceWebsocket.coins(ticket)



        } catch (erro) {
            console.error("WEBSOCKER_SCHEDULER_CLEAR_CATCH ", erro)
        }
    },
    /**
     * get detail by information coin tickets 
     */
    litecoin: async function () {
        try {
            let coins = { id: 2, convert: "BRL", name: "litecoin" }

            let ticket = await service.get(coins)
            
            let data = ticket.data

            let ticketCrimatex = convertLayout(data)

            let isOk = await tickets.register(ticketCrimatex)

            if (!isOk) {
                return console.error("COINS_INFORMATION_IS_NOT_SAVE_TICKET")
            }

            await serviceWebsocket.coins(ticket)


        } catch (erro) {
            console.error("WEBSOCKER_SCHEDULER_CLEAR_CATCH ", erro)
        }
    },

}


function convertLayout(ticket) {
    try {
        let layout = { id: 1, symbol: 1, name: 1, price: 1, volume: 1, }

        layout.id = ticket.id
        layout.symbol = ticket.symbol
        layout.name = ticket.name
        layout.price = ticket.quotes.BRL.price
        layout.volume = ticket.quotes.BRL.volume_24h

        return layout
    } catch (erro) {
        console.error("WEBSOCKER_SCHEDULER_CONVERT_LAYOUT_CATH ", erro)
    }

}
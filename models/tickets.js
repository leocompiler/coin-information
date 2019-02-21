'use strict'

var logger = require('logger');
var monk = require('monk');
var Promise = require('promise');

var cfg = require(global.config.appRoot + '/config');
var db = monk(cfg.Config.DATABASE_MONGODB_WEBSOCKET);
var collection = db.get('tickets');

module.exports = {

	detail: async function ( id ) {

		let resposta = await collection.findOne({ _id: id })
		return resposta

	},

	list: async function ( symbol  ) {
		let resposta = collection.find({ "symbol": symbol } , { limit : 1 , sort : {$natural:-1}} )
		return resposta
	},
	filterByLastRegister: async function ( symbols ) {

		let result = []

		for ( let i = 0; i < symbols.length; i++) { 
			let symbol = symbols[i]
			let resposta = await collection.find({ "symbol": symbol } , { limit : 1 , sort : {$natural:-1}} )
			if ( resposta && resposta.length > 0 ) {
				result.push( resposta[0] )				
			}
			 
		}			
	 
		return result		
	},
	register: async function (item) {
		let resposta = await collection.insert(item)
		return resposta
	},

}


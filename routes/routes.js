
let express = require('express');

let controller = require( global.config.appRoot +'/controllers/informations' );


const router = express.Router();

 
 
router.route('/coins').get( controller.coins); 
 

 

module.exports =  router;

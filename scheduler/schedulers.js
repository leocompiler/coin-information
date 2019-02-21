'use strict'

let schedule = require('node-schedule')

let rotinas = require( global.config.appRoot +'/rotinas/coinmarketcap' );

 
schedule.scheduleJob('*/2 * * * *', async function(){
    try {         
        console.info( "COIN_INFORMATIONS_SCHEDULER_BITCOIN");
        
        rotinas.bitcoin();
 
    } catch( erro ){
        console.error( "COIN_INFORMATIONS_SCHEDULER_BITCOIN", erro );    
    };
    
});
  

 
schedule.scheduleJob('*/2 * * * *', async function(){
    try {         
        console.info( "COIN_INFORMATIONS_SCHEDULER_LITECOIN");
        
        rotinas.litecoin();
 
    } catch( erro ){
        console.error( "COIN_INFORMATIONS_SCHEDULER_BITCOIN", erro );    
    };
    
});


 
schedule.scheduleJob('*/2 * * * *', async function(){
    try {         
        console.info( "COIN_INFORMATIONS_SCHEDULER_ETHEREUM");
        
        rotinas.ethereum();
 
    } catch( erro ){
        console.error( "COIN_INFORMATIONS_SCHEDULER_BITCOIN", erro );    
    };
    
});
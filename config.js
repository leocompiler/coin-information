var path  = require('path') 

global.pathRootApp = path.resolve(__dirname);

 
var development = {
	env :  'development',
	HOST : '0.0.0.0',
	PORT : 12018,
	APIMANAGER_URL: '',
	GATEWAY_WEBSOCKET: 'http://127.0.0.1:12010',
	DATABASE_MONGODB_WEBSOCKET : "127.0.0.1:27017/coin-information",
 	
};
 

exports.Config =  development;

'use strict';


let logger = require('logger').createLogger(); // logs to STDOUT
let url = require('url');
let http = require('http');

module.exports = {

    put: function (url, n , headers) {

        return new Promise((resolve, reject) => {

            var options = {
                "method": "PUT",
                "hostname": url.hostname,
                "port": url.port,
                "path": url.path,
                "headers": {
                    "content-type": "application/json",
                    "cache-control": "no-cache",
                }
            };
            
            if ( headers ) {
                options.headers = headers
            }
            var req = http.request(options, function (res) {

                var chunks = [];

                res.on("data", function (chunk) {

                    chunks.push(chunk);
                });

                res.on("end", function () {

                    var body = Buffer.concat(chunks);

                    if (res.statusCode >= 200 && res.statusCode <= 300) {    

                        resolve(body.toString());

                    } else {

                        let erro  = { msg : body.toString() , statusCode: res.statusCode, solicitacao: n }
                        
                        reject ( erro );
                    }
                });

                res.on("error", function (err) {

                    let erro  = { msg : body.toString() , statusCode: res.statusCode, solicitacao: n }

                    reject ( erro );
                });
            });

            if( n ) {
                let payload = JSON.stringify(n);
                req.write(payload);
            }
            req.end();
        });

    },
  
    post: function (url, n , headers) {

        return new Promise((resolve, reject) => {

            var options = {
                "method": "POST",
                "hostname": url.hostname,
                "port": url.port,
                "path": url.path,
                "headers": {
                    "content-type": "application/json",
                    "cache-control": "no-cache",
                }
            };
            
            if ( headers ) {
                options.headers = headers
            }
            var req = http.request(options, function (res) {

                var chunks = [];

                res.on("data", function (chunk) {

                    chunks.push(chunk);
                });

                res.on("end", function () {

                    var body = Buffer.concat(chunks);

                    if (res.statusCode >= 200 && res.statusCode <= 300) {    

                        resolve(body.toString());

                    } else {

                        let erro  = { msg : body.toString() , statusCode: res.statusCode, solicitacao: n }
                        
                        reject ( erro );
                    }
                });

                res.on("error", function (err) {

                    let erro  = { msg : body.toString() , statusCode: res.statusCode, solicitacao: n }

                    reject ( erro );
                });
            });

            let payload = JSON.stringify(n);


            req.write(payload);

            req.end();
        });

    },

    get: function (url, headers ) {

        return new Promise((resolve, reject) => {

            var options = {
                "method": "GET",
                "hostname": url.hostname,
                "port": url.port,
                "path": url.path
            };

            if ( headers ) {
                options.headers = headers
            }

            var req = http.request(options, function (res) {

                var chunks = [];

                res.on("data", function (chunk) {

                    chunks.push(chunk);
                });

                res.on("end", function () {

                    var body = Buffer.concat(chunks);

                    if (res.statusCode >= 200 && res.statusCode <= 300) {    

                        resolve(body.toString());

                    } else {

                        let erro  = { msg : body.toString() , statusCode: res.statusCode }

                        reject ( erro );
                    }
                });

                res.on("error", function (err) {

                    let erro  = { msg : body.toString() , statusCode: res.statusCode }

                    reject ( erro );
                });
            });

            req.end();
        })
    }
}
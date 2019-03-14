const http = require('http');
var url = require('url');

var express = require('express');
var app = express();






var adr = 'http://dwarfpool.com/eth/api?wallet=0xbdB26007E0910708FB8f5c0695fc486be411EDD0&email=standa.rysanek@gmail.com';
var q = url.parse(adr, true);

/*
console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'
*/

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.wallet); //returns 'february'
//console.log(qdata.email); //returns 'february'


var Request = require("request");



// Request.get(adr, (error, response, body) => {
//     if(error) {
//         return console.dir(error);
        
//     }
//     console.dir(JSON.parse(body));
    
     
// });



Request.get(adr, (error, response, body) => {
  var a;
  a = JSON.parse(body);
  //return JSON.stringify(body);
  // console log 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n'+
  //console.log(JSON.stringify(a));
 
  if(error) {
            return console.dir(error);
          
            }
 //    IMPORTANT       console.dir(JSON.parse(body));
    app.get('/json', function(req, res, next) {
   
    // do any other job here
    res.header("Content-Type",'application/json');
    // pridat do res.send() JSON.stringify(a, null, 4)
    res.send('\nData about mining on dwarfPool'+'\n' 
    +'Adresa penezenky: ' + a.wallet +'\n'
    +'Miner je online: ' + a.workers.lolzzs.alive +'\n'
    +'Celkovy Hasrate: ' + a.total_hashrate_calculated +'\n'
    +'Datum posledni poslane platby z tezby: ' + a.last_payment_date +'\n'
    +'Datum posledni potvrzene share z tezby : ' + a.last_share_date +'\n'
    +'Datum share z minera/ melo by se shodovat s posledni potvrzenou: ' + a.workers.lolzzs.last_submit +'\n'
    );
    
    
    //res.send(a);
  
    });
  
});


// app.get('/test', function(req, rep){
//   rep.send(__dirname + '/index.html');
// })

// app.get('/', function (req, res) {
//   res.send('hello world');
// })

// app.get('/', function(req, res, next) {
  
//     // do any other job here
//     res.send('anything');
  
// });


// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {


//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Api informace z tezby:');
//   });
  
  // server.listen(port, hostname, () => {
  //   console.log(`Server running at http://${hostname}:${port}/`);
  // });

  app.listen(3000, function(){
    console.log('app running on port 3000')
})

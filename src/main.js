var http =require("http");
var Jornada = require("./jornada.js");
var jornada = new Jornada();


http.createServer(function(req,res){
    res.write(JSON.stringify(jornada.getDatos(),null,4));
    res.end();
}).listen(3000);

console.log("BuscadorParitdo Iniciado.");
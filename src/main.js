var http =require("http");
var Jornada = require("./jornada.js");
var jornada = new Jornada();


http.createServer(function(req,res){
    res.write(JSON.stringify(jornada.getDatos(),null,4));
    res.write(JSON.stringify(jornada.getJornada("Jornada-1"),null,4));
    res.write(JSON.stringify(jornada.getObtenerSiguientePartido("Jornada-1","Granada"),null,4));
    res.write(JSON.stringify(jornada.getObtenerEstadioSiguientePartido("Jornada-1","Granada"),null,4));
    res.write(JSON.stringify(jornada.getObtenerDiaSiguientePartido("Jornada-1","Granada"),null,4));
    res.end();
}).listen(3000);

console.log("BuscadorParitdo Iniciado.");
var http =require("http");
const url=require('url');
const fs=require('fs');
const querystring = require('querystring')
var Jornada = require("./jornada.js");
var jornada = new Jornada();


http.createServer(function(req,res){
    res.write(JSON.stringify(jornada.getDatos(),null,4));
    res.write(JSON.stringify(jornada.getJornada("Jornada-1"),null,4));
    res.write(JSON.stringify(jornada.getObtenerSiguientePartido("Jornada-1","Granada"),null,4));
    res.write(JSON.stringify(jornada.getObtenerEstadioSiguientePartido("Jornada-1","Granada"),null,4));
    res.write(JSON.stringify(jornada.getObtenerDiaSiguientePartido("Jornada-1","Granada"),null,4));
    res.write(JSON.stringify(jornada.getPrueba("Jornada-1"),null,4));
    res.end();
}).listen(3000); 
const mime = {
    'html' : 'text/html',
    'css'  : 'text/css',
    'jpg'  : 'image/jpg',
    'ico'  : 'image/x-icon',
    'mp3'  : 'audio/mpeg3',
    'mp4'  : 'video/mp4'
 };
const servidor=http.createServer((pedido ,respuesta) => {
    const objetourl = url.parse(pedido.url);
    let camino='public'+objetourl.pathname;
    if (camino=='public/')
        camino='public/index.html';
    encaminar(pedido,respuesta,camino);
});

servidor.listen(8888);

function encaminar (pedido,respuesta,camino) {
    console.log(camino);
    switch (camino) {
      case 'public/recuperardatos': {
        recuperar(pedido,respuesta);
        break;
      }	
      default : {  
        fs.stat(camino, error => {
          if (!error) {
          fs.readFile(camino,(error, contenido) => {
            if (error) {
              respuesta.writeHead(500, {'Content-Type': 'text/plain'});
              respuesta.write('Error interno');
              respuesta.end();					
            } 
            else 
            {
              const vec = camino.split('.');
              const extension=vec[vec.length-1];
              const mimearchivo=mime[extension];
              respuesta.writeHead(200, {'Content-Type': mimearchivo});
              respuesta.write(contenido);
              respuesta.end();
            }
          });
        } else {
          respuesta.writeHead(404, {'Content-Type': 'text/html'});
          respuesta.write('<!doctype html><html><head></head><body>Recurso inexistente</body></html>');		
          respuesta.end();
          }
        });	
      }
    }	
}

function recuperar(pedido,respuesta) {
    let info = '';
    // Van llegando datos
    pedido.on('data', datosparciales => {
        info += datosparciales;
    });
    // Cuando tenemos todos los datos
    pedido.on('end', () => {
        const formulario = querystring.parse(info);

        // Obtenmos los datos y damos forma a ellos.
        var partidosJornada=JSON.stringify(jornada.getObtenerTodosParitdosJornada(formulario['jornada']));
        var partidosJornada= partidosJornada.replace(/{/g," ");
        var partidosJornada= partidosJornada.replace(/},/g,"<br>");
        var partidosJornada= partidosJornada.replace(/}/g,"<br>");
        //Devolvemos la pagina
        respuesta.writeHead(200, {'Content-Type': 'text/html'});
        const pagina=
        `<!doctype html>
        <html><head></head><body>
            Nombre de jornada:${formulario['jornada']}<br>
            Partidos de la jornada: <br> ${partidosJornada} <br>
            <a href="index.html">Salir</a>
        </body></html>`;
        respuesta.end(pagina);
    });	
  }

console.log("BuscadorParitdo Iniciado.");
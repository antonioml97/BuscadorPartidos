const data = require("./datos/datos.json");
const Jornada  = require("../src/jornada.js");

module.exports = (req,res) =>{
    //Captaremos de la URL el equipo del que queremos ver donde juega el siguiente partido

    const{equipo_recibido="Desconocido"} = req.query
    const{jornada_recibido="Desconocido"} = req.query
    
    var result;
    var jornada = new Jornada();
    // Prueba
    if( (equipo_recibido == "Ateltico" || equipo_recibido == "Huesca" || equipo_recibido == "Cadiz" || equipo_recibido == "Villareal" || equipo_recibido == "Real Madrid" || equipo_recibido=="Barcelona" || equipo_recibido=="Granada" || equipo_recibido=="Sevilla" || equipo_recibido=="Betis") && (jornada_recibido=='1' || jornada_recibido=='2' ) ) {
        var resultado = jornada.getObtenerEstadioSiguientePartido(jornada_recibido,equipo_recibido)
    }
      
    //Si es 'Desconocido' significa que no se ha recibido nada
    if(estadio_recibio == "Desconocido"){
        resultado="Debe indicar un equipo y una jornada";
    }
    else{
        resultado="No tenemos ese equipo o esa jornada los disponibles son: Jornada-1 Jornada-2  Real Madrid  Barcelona Granada Sevilla Betis Ateltico Huesca Cadiz Villareal";

    }

    // ENVIAMOS el resultado
    res.status(200).send(resultado)

}
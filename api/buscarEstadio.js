const Jornada  = require("../src/jornada.js");

module.exports = (req,res) =>{
    //Captaremos de la URL el equipo del que queremos ver donde juega el siguiente partido

    const{equipo_recibido="Desconocido"} = req.query
    const{jornada_recibido="Desconocido"} = req.query
    
    var resultado="Vacio";
    var jornada = new Jornada();

    //Si es 'Desconocido' significa que no se ha recibido nada
    if(equipo_recibido == "Desconocido"){
        resultado="Debe indicar un equipo y una jornada";
    }
    else{
        resultado="No tenemos ese equipo o esa jornada los disponibles son: Jornada-1 Jornada-2  Real Madrid  Barcelona Granada Sevilla Betis Ateltico Huesca Cadiz Villareal" ;
        resultado = "Lo que lee: " + equipo_recibido + " " + jornada_recibido + "."
    }

    // Prueba
    if( (equipo_recibido == "Ateltico" || equipo_recibido == "Huesca" || equipo_recibido == "Cadiz" || equipo_recibido == "Villareal" || equipo_recibido == "Real Madrid" || equipo_recibido=="Barcelona" || equipo_recibido=="Granada" || equipo_recibido=="Sevilla" || equipo_recibido=="Betis") && (jornada_recibido=="Jornada-1" || jornada_recibido=="Jornada-2" ) ) {
        var resultado =  jornada.getObtenerEstadioSiguientePartido(jornada_recibido,equipo_recibido)
    }
      
   

    // ENVIAMOS el resultado
    res.status(200).send(resultado)

}
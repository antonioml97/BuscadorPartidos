class Jornada {
     /**
     * @function constructor
     * @summary Constructor de la clase Jornada
     * @author Antonio Martin Leon
    */
    constructor(){
        this.numeroparitdos;
        this.partidosJornada;
        this.dia;
        this.mes;
        this.anioTemporada;
        this.data;
        try{
          //this.data = JSON.parse(fs.readFileSync('./datos.json', 'utf-8'))
          this.data = require('../datos/datos.json')
        }
        catch(err){
          this.data = undefined;
        }
    }
   
    /**
    * @function getDatos
    * @summary Método que devuelve los datos que tenemos
    * @author Antonio Martin
    * @returns {Array} Array con los datos en formato JSON
    */
    getDatos(){
      return Object.keys(this.data);
    }

    /**
    * @function getJornada
    * @summary Método que devuelve todos los partidos de una jornada
    * @author Antonio Martin
    * @param {string} jornada Nombre del jornada que está buscando.
    * @returns {(Object|String)} objeto del jornada si este existe, si no existe devuelve undefined
    */
    getJornada(jornada){
      if(this.data != undefined){
        var jornadaActual = this.data[jornada];
        if(jornadaActual != undefined){
          return Object.keys(jornadaActual);
        }
        else{
          return undefined;
        }
      }
      else{
        return undefined;
      }
    }
     /**
    * @function getObtenerSiguientePartido
    * @summary Método que devuelve el siguiente partido de un equipo
    * @author Antonio Martin
    * @param1 {string} jornada Nombre de la jornada actual
    * @param2 {string} NombreEquipo Nombre del equipo que queremos comprobar
    * @returns {(Object|String)} objeto array con los datos del partido si este existe, si no existe devuelve undefined.
    */
    getObtenerSiguientePartido(jornadaActual, NombreEquipo){
      var datosjornadaActual = this.data[jornadaActual];
      for(var i in datosjornadaActual['Partidos']){
        if( datosjornadaActual['Partidos'][i]['Equipo1'] == NombreEquipo ||  datosjornadaActual['Partidos'][i]['Equipo2'] == NombreEquipo ){
          return datosjornadaActual['Partidos'][i];
        }
       
      }
      return undefined;
    }
}


module.exports = Jornada;
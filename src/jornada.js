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
    * @returns {(Object|String)} objeto del jornada si este existe, si no existe devuelve un string de aviso.
    */
    getJornada(jornada){
      if(this.data != undefined){
        var jornada = this.data[jornada];
        if(jornada != undefined){
          return jornada;
        }
        else{
          return undefined;
        }
      }
      else{
        return undefined;
      }
    }
}


module.exports = Jornada;
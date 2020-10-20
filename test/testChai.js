var assert    = require("chai").assert;

var Jornada = require("../src/jornada.js");
var jornadas = new Jornada();

describe("Jornada tests using ASSERT interface from CHAI module: ", function() {
 describe("Comprobamos getDatos Function: ", function() {
    it("Comprueba los datos estan bien cargado y no da undefined ", function() {
        result   = jornadas.getDatos();
        assert.notEqual(result,undefined);
    });
    it("Comprueba los datos estan en formato array ", function() {
        result   = jornadas.getDatos();
        assert.isArray(result);
    });
 }); 
 describe("Comprobamos getJornada enlazada con HU2 Function: ", function() {
    it("Comprobamos que existe la Jornada-1", function() {
        result   = jornadas.getJornada("Jornada-1");
        assert.notEqual(result,undefined);
    });
    it("Comprueba los datos estan en formato array ", function() {
        result   = jornadas.getDatos();
        assert.isArray(result);
    });
 });
 describe("Comprobamos getObtenerSiguientePartido enlazada con HU1 Function: ", function() {
    it("Comprobamos el siguiente partido del Granada", function() {
        result   = jornadas.getObtenerSiguientePartido("Jornada-1","Granada");
        assert.notEqual(result,undefined);
    });
    
 });
});


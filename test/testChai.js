var assert    = require("chai").assert;

var Jornada = require("../src/jornada.js");
var jornadas = new Jornada();

describe("Jornada tests using ASSERT interface from CHAI module: ", function() {
 describe("Comprobamos getDatos Function: ", function() {
    it("Comprueba los datos estan bien cargado y no da ERROR ", function() {
        result   = jornadas.getDatos();
        assert.notEqual(result,"ERROR");
    });
    it("Comprueba los datos estan en formato array ", function() {
        result   = jornadas.getDatos();
        assert.isArray(result);
    });
 }); 
 describe("Comprobamos getJornada Function: ", function() {
    it("Compruebamos que existe la Jornada-1", function() {
        result   = jornadas.getJornada("Jornada-1");
        assert.notEqual(result,"ERROR");
    });
 });
});


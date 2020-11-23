module.exports = (req,res) => {
    const { n1='0.0' } = req.query
    const {n2='0.0'} = req.query
    resultado=parseFloat(n1) * parseFloat(n2)
    res.send("La multiplicacion de los numeros es: "+ String(resultado)) 
}
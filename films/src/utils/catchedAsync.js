//  Aca le estamos dando a la función chatcheAsync un controlador y me está devolviendo un controlador mejorado, es decir, me da un controlador que tiene el manejo de errores incorporado
// A este tipo de funciones se les llama de orden superior. Es una fn que recibe como params a una funcipon y la mejora o le hace alguna modificacion y te la retorna modificada
// De acá me voy al index de los controllers para importarla
module.exports = (fn) => {
    return function(req, res,next){
        fn(req,res).catch((err) => {
            next(err)
        })
    }
}
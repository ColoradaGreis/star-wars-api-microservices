//  Aca le estamos dando a la función chatcheAsync un controlador y me está devolviendo un controlador mejorado, es decir, me da un controlador que tiene el manejo de errores incorporado
// A este tipo de funciones se les llama de orden superior. Es una fn que recibe como params a una funcipon y la mejora o le hace alguna modificacion y te la retorna modificada
// De acá me voy al index de los controllers para importarla
//  Se usa esto porque el manejo de errores asíncrono no es captado automáticamente por nuestro manejador de express
// lo que hace es recibir mi fn controller y crea una nueva función donde lo que hace es darme una promesa y llamar a fn controller y catchear el error, yhacer un next del error (lo que hace es "saltar" al manejador del error de express)
module.exports = (fn) => {
    return function(req, res,next){
        fn(req,res).catch((err) => {
            next(err) //decimos que debe continuar al manejador de errores
        })
    }
}
const {ClientError} = require("../utils/errors")

// Acá estoy validando si la data que me mandó el cliente está correcta, en este caso, si tiene name
// Antes de que la función create en data sea ejecutada, yo tengo que revisar que los datos están correctos porque sino basically estoy rompiendo la DB
// Luego de crear el middleware me voy pa las routes y lo agrego a la ruta
// Me fui pa utils y cree errors y clientError para manejar correctamente el status code de mi error y después volví acá para que cuando tire el error, lo haga con el message y status code correcto
module.exports= (req, res, next) => {
    const {name} = req.body
    if(name) return next()
    else throw new ClientError("Error en el nombre", 401)

}
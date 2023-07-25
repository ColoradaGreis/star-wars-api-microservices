// Este clientError me crea un erro que da el mensaje y además pone el tipo de status code que tiene que tirar.
// Luego de crear esto me voy p characterValidation en middleware y arreglo en catcheo del error
class ClientError extends Error{
    constructor(message, statusCode = 400){
        super(message)
        this.statusCode = statusCode
    }
}

module.exports = { ClientError }
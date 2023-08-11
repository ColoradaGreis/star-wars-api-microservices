// nos va a permitir usar nuestras variables de entorno dentro de nuestro process.env
require("dotenv").config()
module.exports={
    MONGO_URI: process.env.MONGO_URI
}
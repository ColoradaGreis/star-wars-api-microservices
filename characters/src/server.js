const express = require("express")
const morgan = require("morgan")
const router = require("./routes")

const server = express()

server.use(morgan("dev"))
server.use(express.json())
server.use(router)

server.use("/characters", require("./routes"))


//al no encontrar ningun endpoint manda este error
server.use("*", (req, res) => {
    res.status(404).send("not Found")
})
// aca creamos una fn que recibe 4 params. Este es el manejador de errores que estamos sobre escribiendo para que maneje todos los errores
// Mi problema es que mi manejador de errores de express, aunque ahora maneja los errores sincrónicos (middleware) y asincrónicos (catchedAsync), me devuelve el mismo statuscode 500, entonces me voy a utils y creo una carpeta errors
server.use((err, req, res, next) => {
    res.status(err.statusCode || 500).send({
        error: true,
        message: err.message
    })
})

module.exports = server
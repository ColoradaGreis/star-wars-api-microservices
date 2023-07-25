// acá es donde quiero que responda el res.status de todos mis controllers porque es algo que voy a usar en todos mis proyectos
// Esta func se encarga de unificar todas las respuestas
module.exports = (res, statusCode, data) => {
    res.status(statusCode).json({
        error: false,
        data
    })
}



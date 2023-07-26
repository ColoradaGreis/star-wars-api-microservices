const {clientError} = require('../utils/errors')

module.exports =(req, res, next) => {
    const {name} = req.body
    if(name) return next()
    else throw new clientError('Error en el nombre del planeta', 401)
}
const planets = require("./planets.json")

// acá voy a hacer funciones que simularán ser el modelo... la api
module.exports = {
    list: ()=> {
        return planets
    },
    create: async ()=> {
        throw Error('Hay un error en la DB al momento de crear el planeta')
    }
}
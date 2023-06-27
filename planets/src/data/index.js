const planets = require("./planets.json")

// acá voy a hacer funciones que simularán ser el modelo... la api
module.exports = {
    list: ()=> {
        return planets
    }
}
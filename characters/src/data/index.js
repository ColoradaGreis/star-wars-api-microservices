const characters = require("./characters.json")

// acá voy a hacer funciones que simularán ser el modelo... la api
module.exports = {
    list: ()=> {
        return characters
    },
    create: async () => {
        throw Error("Hay un error al momento de crear el personaje")
    }
}
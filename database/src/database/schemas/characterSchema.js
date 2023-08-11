// va a tener todos los atributos de los personajes
// mong

const {Schema} = require("mongoose")

const charactersSchema = new Schema({
    _id: String,
    name: String,
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: String,
    homeworld: {type:String, ref:"Planet"}, // referencia a el ID del planeta
    films: [{type:String, ref:"Film"}] // ARRAY de referencias a películas

})

module.exports = charactersSchema
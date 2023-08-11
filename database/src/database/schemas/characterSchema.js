// va a tener todos los atributos de los personajes
// mong

const {Schema} = require("mongoose")

const charactersSchema = new Schema({
    _id: string,
    name: string,
    height: string,
    mass: string,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: string,
    homeworld: {type:string, ref:"Planet"}, // referencia a el ID del planeta
    films: [{type:string, ref:"Film"}] // ARRAY de referencias a películas

})
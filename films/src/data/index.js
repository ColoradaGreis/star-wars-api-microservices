const films = require("./films.json")

module.exports = {
    list: () =>{
        return films
    },
    create: async () => {
        throw Error("there's a mistake at this moment")
    }
}
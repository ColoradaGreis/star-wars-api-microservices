const Films = require("../data")

module.exports = async (req,res) => {
  const films = await Films.list()
 res.status(200).send("personajes")
}
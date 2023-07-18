const {Router}= require("express")
const controllers = require ("../controllers")
const middlewares = require("../middlewares")

const router = Router()

router.get("/", controllers.getCharacters)

//Ahora que metí los middlewaes tengo en mi ruta de post, tengo primero la ruta "/", después tengo el middleware y luego el controlador
router.post("/", middlewares.characterValidation, controllers.createCharacter)

module.exports = router
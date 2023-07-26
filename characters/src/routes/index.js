const {Router}= require("express")
const controllers = require ("../controllers")
const middlewares = require("../middlewares")

const router = Router()

router.get("/", controllers.getCharacters)

//Ahora que metí los middlewaes tengo en mi ruta de post, tengo primero la ruta "/", después tengo el middleware y luego el controlador
// El middleware revisa que la data que manda el client esté correcta (maneja los errores del client) (revisa los errores sincrónicos) y después en los controllers puse el catchedAsync que maneja los errores del server
router.post("/", middlewares.characterValidation, controllers.createCharacter)

module.exports = router
const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemonMiddleware = require("./pokemonMiddleware.js");
const typeMiddleware = require("./typeMiddleware.js")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/", (req, res)=>{
    res.send("Denise, el servidor en express funciona!");
});

router.use("/pokemons", pokemonMiddleware);
router.use("/types", typeMiddleware);

module.exports = router;

const { Router } = require('express');

const pokemonMiddleware = require("./pokemonMiddleware.js");
const typeMiddleware = require("./typeMiddleware.js")

const router = Router();

router.use("/pokemons", pokemonMiddleware);
router.use("/types", typeMiddleware);

module.exports = router;

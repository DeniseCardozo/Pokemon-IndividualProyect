const { Router } = require('express');
const { Pokemon, Type } = require("../db.js");
const fetch = require('node-fetch');
const router = Router();

//////////////// GET /pokemons ////////////////
//////////////// GET /pokemons ////////////////
//////////////// GET /pokemons ////////////////

router.get("/", (req, res, next)=>{
    try {                                     
        const apiPokemonPromise = fetch("https://pokeapi.co/api/v2/pokemon?limit=40")
            .then(data => data.json())
            .then(json => Promise.all(json.results.map(poke => fetch(poke.url)
                .then(data => data.json())
                )))

        const dataBasePokemonPromise = Pokemon.findAll({
            include: {
                model: Type,
                attributes: ["name"],
                through: {
                    attributes: [],
                }
            }})
        
        return Promise.all([
            apiPokemonPromise,
            dataBasePokemonPromise
        ]).then((pokemons) => { 
            const apiPokemons = pokemons[0].map( p => {
                return {
                    id_Pokemon: p.id,
                    name: p.name,
                    types: p.types.map(p => p.type.name),
                    image: p.sprites.other["official-artwork"].front_default,
                    health: p.stats[0].base_stat,
                    attack: p.stats[1].base_stat,
                    defense: p.stats[2].base_stat, 
                    speed: p.stats[5].base_stat, 
                    height: p.height, 
                    weight: p.weight
                }});
            
            const dataBasePokemon= pokemons[1].map( p => {
        
                return {
                    id_Pokemon: p.id_Pokemon,
                    name: p.name,
                    types: p.Types.map(p => p.name),   
                    image: p.image,
                    health: p.health,
                    attack: p.attack,
                    defense: p.defense,
                    speed: p.speed ,
                    height: p.height, 
                    weight: p.weight 
                }
            });
        
            const allPokemons = apiPokemons.concat(dataBasePokemon); 

            const name = req.query.name;
            if (name) {
                let characterByName = allPokemons.filter(pokemon => pokemon.name.toLowerCase().includes(name.toLowerCase()))
                if(characterByName) {
                    return res.status(200).send(characterByName);
                } else{
                    return res.status(404).send("Sorry, that Pokemon does not exist. Try typing the name again!");
                }
            }
            res.status(200).send(allPokemons);
            });

    } catch (error) {
        next(error)
    }
})



//////////////// GET /pokemons/{idPokemon} ////////////////
//////////////// GET /pokemons/{idPokemon} ////////////////
//////////////// GET /pokemons/{idPokemon} ////////////////

router.get("/:idPokemon", async (req, res, next) => {
   try {
    
    let apiPokemon = [];
            for(let i = 1; i <= 40; i++) {
                apiPokemon.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`))};
        
        const apiPokemonPromise = Promise.all(apiPokemon)
            .then((pokeData) => Promise.all(pokeData.map(result => result.json())));

        const dataBasePokemonPromise = Pokemon.findAll({
            include: {
                model: Type,
                attributes: ["name"],
                through: {
                    attributes: [],
                }
            }})
        
        return Promise.all([
            apiPokemonPromise,
            dataBasePokemonPromise
        ]).then((pokemons) => { 
            const apiPokemons = pokemons[0].map( detailPokemon => {
                return {
                    name: detailPokemon.name,
                    types: detailPokemon.types.map(p => p.type.name),
                    image: detailPokemon.sprites.other["official-artwork"].front_default,
                    id_Pokemon: detailPokemon.id,
                    health: detailPokemon.stats[0].base_stat,
                    attack: detailPokemon.stats[1].base_stat,
                    defense: detailPokemon.stats[2].base_stat, 
                    speed: detailPokemon.stats[5].base_stat, 
                    height: detailPokemon.height, 
                    weight: detailPokemon.weight
                }});
            
            const dataBasePokemon= pokemons[1].map( detailPokemon => {
                return {
                    name: detailPokemon.name,
                    types: detailPokemon.Types.map(p => p.name),
                    image: detailPokemon.image, 
                    id_Pokemon: detailPokemon.id_Pokemon,
                    health: detailPokemon.health,
                    attack: detailPokemon.attack,
                    defense: detailPokemon.defense,
                    speed: detailPokemon.speed ,
                    height: detailPokemon.height, 
                    weight: detailPokemon.weight
                }});
                
            let {idPokemon} = req.params;
            if (idPokemon.search('[a-zA-Z]+') === -1){
                idPokemon = parseInt(idPokemon, 10)
            }
            const allPokemons = apiPokemons.concat(dataBasePokemon);
            const pokemonFinded = allPokemons.find( pokemon => {
                return (idPokemon === pokemon.id_Pokemon)   
            });
            if(!pokemonFinded) {
                return res.status(404).send("Sorry, that Pokemon does not exist.");
            }
           
            res.status(200).json(pokemonFinded);
            });
            
   } catch (error) {
    next(error)
  }
})



//////////////// POST /pokemons ////////////////
//////////////// POST /pokemons ////////////////
//////////////// POST /pokemons ////////////////

router.post("/", async (req, res, next) => {
    try {
        const {name, image, health, attack, defense, speed, height, weight, types} = req.body;
        const dataBasePokemons = await Pokemon.findAll({
            where: {
                name: name
            }
        });
        
        if(dataBasePokemons.length !== 0) {
            return res.status(404).send("Sorry, that pokemon already exists. Please try again!");
        }
        let pokemonCreated = await Pokemon.create({
                name,
                image,
                health,
                attack,
                defense, 
                speed, 
                height, 
                weight
        });
        const dataBaseTypes = await Type.findAll({
            where: {
                name: types
            }
        });
        pokemonCreated.addType(dataBaseTypes);
        return res.status(200).json(pokemonCreated);
    } catch (error) {
        return next({ message: 'Could not Create Pokemon!', status: 400 })
    }
})

module.exports = router;
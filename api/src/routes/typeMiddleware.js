const { Router } = require('express');
const {Type} = require("../db.js");
const fetch = require('node-fetch');
const axios = require("axios");
const router = Router();


router.get("/", async (req, res)=>{                                      ///<---- con AXIOS!
        const apiTypesPromise = await axios.get("https://pokeapi.co/api/v2/type");
        const typesArreglo = apiTypesPromise.data.results.map(t => t.name);
        //console.log(typesArreglo);
               typesArreglo.forEach(type => {
                    Type.findOrCreate({
                         where:{
                              name: type
                         }
                    })
               })
        const allTypes = await Type.findAll();  
     //    console.log(allTypes);
        res.send(allTypes);
})

module.exports = router;


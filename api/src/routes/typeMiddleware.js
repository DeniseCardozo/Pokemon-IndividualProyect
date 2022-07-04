const { Router } = require('express');
const {Type} = require("../db.js");
const fetch = require('node-fetch');
const axios = require("axios");
const router = Router();

// router.get("/", async (req, res)=>{       
                                   
//         const apiTypesPromise = await axios.get("https://pokeapi.co/api/v2/type");
//         const typesArreglo = apiTypesPromise.data.results.map(t => t.name);
      
//                typesArreglo.forEach(type => {
//                     Type.findOrCreate({
//                          where:{
//                               name: type
//                          }
//                     })
//                })
//         const allTypes = await Type.findAll();  

//         res.send(allTypes);
// })

router.get("/",  async (req, res)=>{       
                                   
     fetch("https://pokeapi.co/api/v2/type")
          .then(data => data.json())
          .then(json => json.results.map(t => t.name))
          .then(data => data.forEach(type => {
               Type.findOrCreate({
                    where:{
                         name: type
                    }
               })
          }))

      const allTypes = await Type.findAll();  

      res.send(allTypes);
})

module.exports = router;


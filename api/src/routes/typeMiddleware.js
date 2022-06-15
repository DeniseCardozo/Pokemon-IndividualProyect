const { Router } = require('express');
const {Type} = require("../db.js");
const fetch = require('node-fetch');
const axios = require("axios");
const router = Router();

//////////////// GET /types:

// router.get("/", async (req, res)=>{
//    try {
//       fetch("https://pokeapi.co/api/v2/type")
//           .then(resultApi => resultApi.json())
//           .then(json => json.results.map(t => t.name))
//           .then(t => t.forEach(type => {
//                Type.findOrCreate({
//                     where:{
//                          Name: type,
//                          Id_Type: uuidv4() 
//                     }
//           })}))
   
//     return Type.findAll()
//         .then(r => {
//              res.send(r)})
//   //   res.send(allTypes);
      
//    } catch (error) {
//      res.status(404).send(error)
//    }

// })


router.get("/", async (req, res)=>{                                      ///<---- con AXIOS!
        const apiTypesPromise = await axios.get("https://pokeapi.co/api/v2/type");
        const typesArreglo = apiTypesPromise.data.results.map(t => t.name);
        //console.log(typesArreglo);
               typesArreglo.forEach(type => {
                    Type.findOrCreate({
                         where:{
                              name: type
                              // id_Type: uuidv4() 
                         }
                    })
               })
        const allTypes = await Type.findAll();  
     //    console.log(allTypes);
        res.send(allTypes);
})

module.exports = router;


// [ ] GET /types:
// Obtener todos los tipos de pokemons posibles
// En una primera instancia deberán traerlos desde pokeapi y guardarlos en su propia base de datos y luego ya utilizarlos desde allí
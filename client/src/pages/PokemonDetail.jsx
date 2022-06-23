import React, { useEffect } from "react";
import styles from "./PokemonDetail.module.css";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../components/NavBar.jsx";
import { getPokemonById } from "../redux/actions/index.js";


const PokemonDetail = (props) => {

    let params = props.match.params.idPokemon;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemonById(params))
    },[dispatch, params]);

    const pokemon = useSelector(state => state.pokemon);

    return (
        <React.Fragment>
            <NavBar />

            <div>
                {
                    pokemon && (
                        <div className={styles.bigBox}>
                            <div className={styles.boxImage}>
                                <img className={styles.image} src={pokemon.image} alt="Pokeimage not found" />
                            </div>
                            <div className={styles.boxData}>
                                <h1 className={styles.name}>{pokemon.name}</h1>
                               <div className={styles.prueba1}>
                                    <h3 className={styles.title}>Id: <p>{pokemon.id_Pokemon}</p></h3>
                                    <h3 className={styles.title}>Type: {pokemon.types}</h3> 
                                    <div className={styles.prueba2}>
                                        <div>
                                            <h3 className={styles.title}>Health:</h3><p>{pokemon.health}</p>
                                            <h3 className={styles.title}>Attack:</h3><p>{pokemon.attack}</p>
                                        </div>
                                        <div>
                                            <h3 className={styles.title}>Defense:</h3><p>{pokemon.defense}</p>
                                            <h3 className={styles.title}>Speed:</h3><p>{pokemon.speed}</p>
                                        </div>
                                        <div>
                                            <h3 className={styles.title}>Height:</h3><p>{pokemon.height}</p>
                                            <h3 className={styles.title}>Weight:</h3><p>{pokemon.weight}</p>
                                        </div>
                                       
                                    </div>
                                   
                               </div>
                                

                                {/* <div className={styles.data}>
                                <h3 className={styles.title}>Type:</h3> 
                                {pokemon.types.map((t) => {
                                return (
                                  <p className={styles.type}>{t.toUpperCase()}</p>
                                )})}
                                <h3 className={styles.title}>Id:</h3><p>{pokemon.id_Pokemon}</p>
                                <h3 className={styles.title}>Health:</h3><p>{pokemon.health}</p>
                                <h3 className={styles.title}>Attack:</h3><p>{pokemon.attack}</p>
                                <h3 className={styles.title}>Defense:</h3><p>{pokemon.defense}</p>
                                <h3 className={styles.title}>Speed:</h3><p>{pokemon.speed}</p>
                                <h3 className={styles.title}>Height:</h3><p>{pokemon.height}</p>
                                <h3 className={styles.title}>Weight:</h3><p>{pokemon.weight}</p>
                                </div> */}
                               
                            </div>
                            
                        </div>
                    )

                }
                
            </div>
            
        </React.Fragment>
    )
};

export default PokemonDetail;

// Ruta de detalle de Pokemon: debe contener

// [ ] Los campos mostrados en la ruta principal para cada pokemon (imagen, nombre y tipos)
// [ ] Número de Pokemon (id)
// [ ] Estadísticas (vida, ataque, defensa, velocidad)
// [ ] Altura y peso



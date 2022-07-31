import React, { useEffect } from "react";
import styles from "./PokemonDetail.module.css";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../components/NavBar.jsx";
import { getPokemonById } from "../redux/actions/index.js";
import Loading from "../components/Loading";


const PokemonDetail = (props) => {
    let params = props.match.params.idPokemon;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemonById(params))
    },[dispatch, params]);

    const pokemon = useSelector(state => state.pokemon);

    return (
        <React.Fragment>
            <div className={styles.bigBox}>

                {
                    pokemon.name !== undefined ? (
                        <>
                            <div className={styles.boxImage}>
                                <img className={styles.image} src={pokemon.image} alt="Pokeimage not found" />
                            </div>
                            <div className={styles.boxData}>
                                <div className={styles.contentName}>
                                    <h1 className={styles.name}>{pokemon.name}</h1>
                                </div>
                                <div className={styles.prueba1}>
                                    <div className={styles.contentId}>
                                        <h3 className={styles.title}>Id: <p>{pokemon.id_Pokemon}</p></h3>
                                    </div>
                                    <div className={styles.contentTypes}>
                                        <h3 className={styles.title}>Type: {pokemon.types}</h3> 
                                    </div>
                                    
                                    <div className={styles.prueba2}>
                                        <div className={styles.subtitleLeft}>
                                            <h3 className={styles.title}>Health</h3><p>{pokemon.health}</p>
                                        </div>
                                        <div className={styles.subtitleRigth}>
                                            <h3 className={styles.title}>Attack</h3><p>{pokemon.attack}</p>
                                        </div>
                                        <div className={styles.subtitleLeft}>
                                            <h3 className={styles.title}>Defense</h3><p>{pokemon.defense}</p>
                                        </div>
                                        <div className={styles.subtitleRigth}>
                                            <h3 className={styles.title}>Speed</h3><p>{pokemon.speed}</p>
                                        </div>
                                        <div className={styles.subtitleLeft}>
                                            <h3 className={styles.title}>Height</h3><p>{pokemon.height}</p>
                                        </div>
                                        <div className={styles.subtitleRigth}>
                                            <h3 className={styles.title}>Weight</h3><p>{pokemon.weight}</p>
                                        </div>
                                    </div>
                               </div>
                            </div>
                            </>
                    ) : <Loading />
                }
                          <NavBar />
                </div>
  

        </React.Fragment>
    )
};

export default PokemonDetail;


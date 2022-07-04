import React from "react";
import styles from "./Home.module.css";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { getAllPokemons } from "../redux/actions";
import NavBar from "../components/NavBar.jsx";
import Card from "../components/Card.jsx";
import Paginated from "../components/Paginated.jsx";
import SearchBar from "../components/SearchBar.jsx";
import imagePokeHead from "../tools/pokehead.png"
import MessageNotFound from "../components/MessageNotFound";

const Home = () => {
    const dispatch = useDispatch(); 
    const allPokemons = useSelector(state => state.pokemons);

    useEffect(() => {
        dispatch(getAllPokemons());
    }, [dispatch])

    const [currentPage, setCurrentPage] = useState(1);
    const [order, setOrder] = useState("");
    const pokemonsPerPage = 12;
    const lastPokemon = currentPage * pokemonsPerPage;
    const firstPokemon = lastPokemon - pokemonsPerPage;
    const currentPokemons = allPokemons.slice(firstPokemon, lastPokemon);

    const paginated = pageNumber => setCurrentPage(pageNumber);

    return (
        <React.Fragment>
            <div className={styles.bigBox}>
                <div className={styles.header}>
                    <img className={styles.image} src={imagePokeHead} alt="pokeimage" />
                    <div className={styles.pokepokepoke}>
                        <h1 className={styles.title}>PokePokePoke-dex</h1>
                    </div>
                </div> 
                <SearchBar setCurrentPage={setCurrentPage} setOrder={setOrder} />
                <div className={styles.content}>
                    {
                        (currentPokemons.length  > 0 ) ? 
                        currentPokemons.map(
                        pokemon => <Card key={pokemon.id_Pokemon} idPokemon={pokemon.id_Pokemon} name={pokemon.name} image={pokemon.image} types={pokemon.types} />) :
                        <MessageNotFound />
                    }
                </div>
                <NavBar />
                <Paginated pokemonsPerPage={pokemonsPerPage} allPokemons={allPokemons.length} paginated={paginated} />
            </div>
        </React.Fragment>
    )
};

export default Home;

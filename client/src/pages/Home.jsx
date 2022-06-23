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
import Loading from "../components/Loading";
import MessageNotFound from "../components/MessageNotFound";



const Home = () => {
    const dispatch = useDispatch(); 
    const allPokemons = useSelector(state => state.pokemons);

    useEffect(() => {
        dispatch(getAllPokemons());
    }, [dispatch])

///////// ----> PARA EL PAGINAD0!
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
                    <h1 className={styles.title1}>PokePokePoke-dex</h1>
                </div>
            </div> 
            <SearchBar setCurrentPage={setCurrentPage} setOrder={setOrder} />


            <div className={styles.content}>


            {/* {(pokeCurrent.length > 0 || (pokeCurrent.name !== undefined && pokeCurrent.name !== 'Error'))? <CardList pokeCurrent={pokeCurrent}/> : <PokeNotFound/>}
*/}
            { 
            (currentPokemons.length  > 0 || (currentPokemons.name !== undefined && currentPokemons.name !== 'Error'))? 
                currentPokemons && currentPokemons.map(
                pokemon => <Card key={pokemon.id_Pokemon} idPokemon={pokemon.id_Pokemon} name={pokemon.name} image={pokemon.image} types={pokemon.types} />):
                    <MessageNotFound />

                     // <Loading/> 
            }
 
            </div>

            <NavBar />
            <Paginated pokemonsPerPage={pokemonsPerPage} allPokemons={allPokemons.length} paginated={paginated} />

            </div>
            
        </React.Fragment>
    )
};

export default Home;


// [ ] Input de búsqueda para encontrar pokemons por nombre (La búsqueda será exacta, es decir solo encontrará al pokemon si se coloca el nombre completo)
// [ ] Área donde se verá el listado de pokemons. Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta GET /pokemons y deberá mostrar su:
// Imagen
// Nombre
// Tipos (Electrico, Fuego, Agua, etc)
// [ ] Botones/Opciones para filtrar por tipo de pokemon y por pokemon existente o creado por nosotros
// [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente los pokemons por orden alfabético y por ataque
// [ ] Paginado para ir buscando y mostrando los siguientes pokemons, 12 pokemons por pagina.
import React from "react";
import styles from "./SearchBar.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPokemonByName } from "../redux/actions";
import Filters from "./Filters.jsx";
import searchImage from "../tools/search.png"

const SearchBar = ({setCurrentPage, setOrder}) => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [showFilters, setShowFilters] = useState(false);
    const [errors, setErrors] = useState({});

    const validations = (nameInput) => {
        let errors = {};
        if(nameInput.search("[0-9]") !== -1) {
            errors.nameInput = "Sorry, no name has a number. Try typing the name again!";}
        if(nameInput.search("[^A-Za-z0-9_]") !== -1) {
            errors.nameInput = "Sorry, no name has symbols. Try typing the name again!";}
        return errors;
    }

    function handleInputChange(e) {
        e.preventDefault();
        setName(e.target.value.toLowerCase());
        setErrors(validations(name));
    };
    function handleSubmit(e) {
        e.preventDefault();
        dispatch(searchPokemonByName(name));
        setName("");
    };
    function handleClic(){
        setShowFilters(!showFilters)
    };

    return (
        <React.Fragment>
            <div className={styles.contents}>
                <div className={styles.input}>
                    <input className={styles.inputName} type="text" value={name} placeholder="Pokemon Name..." onChange={(e) => handleInputChange(e)
                    } />
                    <button className={styles.button} type="submit" onClick={(e) => handleSubmit(e)}>
                        <img className={styles.buttonImage} src={searchImage} alt="imageSearch" />
                    </button>
                </div>
                <div className={styles.boxerror}>
                    {errors.nameInput && (<p className={styles.error}>{errors.nameInput}</p>)}
                </div>
                <div className={styles.textPokedex}>
                    <h4 className={styles.text}>You can search for pokemons by typing their name!.<span>&#160;</span></h4>
                </div>
                <div className={styles.boxFilterbutton}>
                    <div className={styles.filterButton}>
                        <h1 className={styles.filterButtontext} onClick={handleClic}>FILTERS</h1>
                    </div>
                    <h5 className={styles.text2}>Use the filters to better find your pokemon.</h5>
                </div>
                {showFilters ? <Filters setCurrentPage={setCurrentPage} setOrder={setOrder} /> : null }
            </div>
        </React.Fragment>
    )
};

export default SearchBar;
import React from "react";
import styles from "./LandingPage.module.css";
import { Link } from "react-router-dom";
import imagePokedex from "../tools/pokedex.png";

const LandingPage = () => {
    return (
        <React.Fragment>
             <div className={styles.video}>
               
                {/* <div className={styles.landing}> */}
                <div className={styles.boxText}>
                <h1 className={styles.title}>I'm Pokedex, discover more about your pokemons.<span>&#160;</span></h1>
                </div>
                <img className={styles.pokedex} src={imagePokedex} alt="pokedex-img" />
                <h1 className={styles.titleWelcome}>Welcome!</h1>
                <Link to="/home">
                    <button className={styles.button}>Go!</button>
                </Link>
            </div>
            
           
        </React.Fragment>
    )
};

export default LandingPage;
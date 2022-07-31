import React from "react";
import { Link } from "react-router-dom";
import stylecard from "./Card.module.css";
import Egg from "../tools/egg.png"

const Card = ({name, image, types, idPokemon}) => {
    return (
        <Link to={`/detail/${idPokemon}`}>
            <div className={stylecard.completeCard}>
                {image ? (<img className={stylecard.iconoPokemon} src={image} alt="Pokeimage not found" />) :
                (<img className={stylecard.iconoPokemon} src={Egg} alt="Pokeimage not found" />)  }
                
                {console.log(image)}
                <h1 className={stylecard.namePokemon}>{name.toUpperCase()}</h1>
                <div className={stylecard.boxTypes}> 
                    <h3 className={stylecard.titleTypes}>Type:</h3> 
                    {
                        types.map((t) => {
                            return (<p className={stylecard.type}>{t.toUpperCase()}</p>)})
                    }
                </div>
            </div>      
        </Link>          
    )
};

export default Card;






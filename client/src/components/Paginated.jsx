import React from "react";
import style from "./Paginated.module.css";

const Paginated = ({pokemonsPerPage, allPokemons, paginated}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(allPokemons/pokemonsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <React.Fragment>
            <div className={style.paginated}>
                {
                    pageNumbers && pageNumbers.map(number => 
                        <div  key={number}>
                            <button className={style.number} onClick={() => paginated(number)}>{number} </button>
                        </div>
                        )
                    }
            </div>
        </React.Fragment>
    )
};

export default Paginated;
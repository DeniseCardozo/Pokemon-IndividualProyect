import React, { useEffect } from "react";
import style from "./Filters.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filterPokemonByTypes, filterPokemonCreated, getAllPokemons, getAllTypes, orderByAttack, orderByDefense, orderByName, orderByHealth, orderBySpeed, orderByHeight, orderByWeight } from "../redux/actions";

const Filters = ({setCurrentPage, setOrder}) => {
    const dispatch = useDispatch();
    const allTypes = useSelector((state) => state.allTypes);

    useEffect(() => {
        dispatch(getAllTypes())
    }, [dispatch])

    function handleAllPokemons() {
        dispatch(getAllPokemons())
        setCurrentPage(1);
    }
    function handleFilterTypes(e) {
        dispatch(filterPokemonByTypes(e.target.value))
    }
    function handleFilterCreated(e) {
        dispatch(filterPokemonCreated(e.target.value))
    }
    function handleOrderByName(e) {
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setCurrentPage(1);
        setOrder(`Order ${e.target.value}`)
    }
    function handleOrderByAttack(e) {
        e.preventDefault();
        dispatch(orderByAttack(e.target.value));
        setCurrentPage(1);
        setOrder(`Order ${e.target.value}`)
    }
    function handleOrderByDefense(e) {
        e.preventDefault();
        dispatch(orderByDefense(e.target.value));
        setCurrentPage(1);
        setOrder(`Order ${e.target.value}`)
    }
    function handleOrderByHealth(e) {
        e.preventDefault();
        dispatch(orderByHealth(e.target.value));
        setCurrentPage(1);
        setOrder(`Order ${e.target.value}`)
    }
    function handleOrderBySpeed(e) {
        e.preventDefault();
        dispatch(orderBySpeed(e.target.value));
        setCurrentPage(1);
        setOrder(`Order ${e.target.value}`)
    }
    function handleOrderByHeight(e) {
        e.preventDefault();
        dispatch(orderByHeight(e.target.value));
        setCurrentPage(1);
        setOrder(`Order ${e.target.value}`)
    }
    function handleOrderByWeight(e) {
        e.preventDefault();
        dispatch(orderByWeight(e.target.value));
        setCurrentPage(1);
        setOrder(`Order ${e.target.value}`)
    }

    return (
        <React.Fragment>
            <div className={style.contents}>
                <button className={style.buttonAll} type="reset" onClick={handleAllPokemons}>ALL POKEMONS</button>
                <div className={style.filterCreated}>
                    <button className={style.buttonExis} value="existing" onClick={(e) => handleFilterCreated(e)}>Existing</button>
                    <button className={style.buttonCrea} value="created" onClick={(e) => handleFilterCreated(e)}>Created</button>
                </div>
                <div className={style.orderName}>
                    <button className={style.buttonOrder1} value="ascending" onClick={(e) => handleOrderByName(e)}>Ascending</button>
                    <button className={style.buttonOrder2} value="descending" onClick={(e) => handleOrderByName(e)}>Descending</button>
                </div>
                <div className={style.filterTypes}>   
                    {
                        allTypes && allTypes.map( type => 
                                <button className={style.button} value={type.name} onClick={(e) => handleFilterTypes(e)}>{type.name.toUpperCase()}</button>)
                    }
                </div> 
                <div className={style.boxOrder}>
                    <div className={style.orderAttack}>
                        <label>ATTACK</label>
                        <button className={style.orderArrow} value="ascending" onClick={(e) => handleOrderByAttack(e)}>⬆️</button>
                        <button className={style.orderArrow} value="descending" onClick={(e) => handleOrderByAttack(e)}>⬇️</button>
                    </div>
                    <div className={style.orderDefense}>
                        <label>DEFENSE</label>
                        <button className={style.orderArrow} value="ascending" onClick={(e) => handleOrderByDefense(e)}>⬆️</button>
                        <button className={style.orderArrow} value="descending" onClick={(e) => handleOrderByDefense(e)}>⬇️</button>
                    </div>
                    <div className={style.orderHealth}>
                        <label>HEALTH</label>
                        <button className={style.orderArrow} value="ascending" onClick={(e) => handleOrderByHealth(e)}>⬆️</button>
                        <button className={style.orderArrow} value="descending" onClick={(e) => handleOrderByHealth(e)}>⬇️</button>
                    </div>
                    <div className={style.orderSpeed}>
                        <label>SPEED</label>
                        <button className={style.orderArrow} value="ascending" onClick={(e) => handleOrderBySpeed(e)}>⬆️</button>
                        <button className={style.orderArrow} value="descending" onClick={(e) => handleOrderBySpeed(e)}>⬇️</button>
                    </div>
                    <div className={style.orderSpeed}>
                        <label>HEIGHT</label>
                        <button className={style.orderArrow} value="ascending" onClick={(e) => handleOrderByHeight(e)}>⬆️</button>
                        <button className={style.orderArrow} value="descending" onClick={(e) => handleOrderByHeight(e)}>⬇️</button>
                    </div> 
                    <div className={style.orderSpeed}>
                        <label>WEIGHT</label>
                        <button className={style.orderArrow} value="ascending" onClick={(e) => handleOrderByWeight(e)}>⬆️</button>
                        <button className={style.orderArrow} value="descending" onClick={(e) => handleOrderByWeight(e)}>⬇️</button>
                    </div> 

                </div>
            </div>
        </React.Fragment>
    )
};

export default Filters;






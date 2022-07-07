import fetch from 'node-fetch';
import { 
    GET_ALL_POKEMONS, 
    GET_ALL_TYPES, 
    GET_POKEMON_BY_ID, 
    FILTER_POKEMON_BY_TYPE, 
    FILTER_POKEMON_CREATED, 
    ORDER_BY_NAME, 
    SEARCH_POKEMON_BY_NAME, 
    POST_CREATED_POKEMON, 
    ORDER_BY_ATTACK, 
    ORDER_BY_DEFENSE, 
    ORDER_BY_HEALTH,
    ORDER_BY_SPEED,
    ORDER_BY_HEIGHT,
    ORDER_BY_WEIGHT,
    SET_STATE_DETAIL_POKEMON } from './actionTypes';

export const getAllPokemons = () => {
    return async function(dispatch) {
        return fetch("http://localhost:3001/pokemons")
        .then(response => response.json())
        .then(json => dispatch({
            type: GET_ALL_POKEMONS,
            payload: json
        }))
    }
};

export const getAllTypes = () => {
    return async function(dispatch) {
        return fetch("http://localhost:3001/types")
        .then(response => response.json())
        .then(json => dispatch({
            type: GET_ALL_TYPES,
            payload: json
        }))
    }
};

export const postNewPokemon = (valuesInputs) => {
    const inputs = {
            name: valuesInputs.name,
            types: [valuesInputs.firstType, valuesInputs.secondType],
            image: valuesInputs.image,
            health: valuesInputs.health,
            attack: valuesInputs.attack,
            defense: valuesInputs.defense,
            speed: valuesInputs.speed,
            height: valuesInputs.height, 
            weight: valuesInputs.weight
    }
    return async function(dispatch) {
        return fetch("http://localhost:3001/pokemons", {
            method: 'POST', 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(inputs)
        })
        .then(response => response.json())
        .then(json => dispatch({
            type: POST_CREATED_POKEMON,
            payload: json
        }))
    }
};

export const getPokemonById = (idPokemon) => {
    return async function(dispatch) {
        try {
            return fetch(`http://localhost:3001/pokemons/${idPokemon}`)
        .then(response => response.json())
        .then(json => dispatch({
            type: GET_POKEMON_BY_ID,
            payload: json
        }))
        } catch (error) {
            console.log(error)
        }
    }
};

export const setStatePokemonDetail = (value) => {
    return {
        type: SET_STATE_DETAIL_POKEMON,
        payload: value
    }
}

export const searchPokemonByName = (name) => {
    return async function(dispatch) {
        return fetch(`http://localhost:3001/pokemons?name=${name}`)
        .then(response => response.json())
        .then(json => dispatch({
            type: SEARCH_POKEMON_BY_NAME,
            payload: json
        }))
    }
};

export const filterPokemonByTypes = (value) => {
    return {
            type: FILTER_POKEMON_BY_TYPE,
            payload: value
        }
};

export const filterPokemonCreated = (value) => {
    return {
            type: FILTER_POKEMON_CREATED,
            payload: value
        }
};

export const orderByName = (value) => {
    return {
            type: ORDER_BY_NAME,
            payload: value
        }
};

export const orderByAttack = (value) => {
    return {
            type: ORDER_BY_ATTACK,
            payload: value
        }
};

export const orderByDefense = (value) => {
    return {
            type: ORDER_BY_DEFENSE,
            payload: value
        }
};

export const orderByHealth = (value) => {
    return {
            type: ORDER_BY_HEALTH,
            payload: value
        }
};

export const orderBySpeed = (value) => {
    return {
            type: ORDER_BY_SPEED,
            payload: value
        }
};

export const orderByHeight = (value) => {
    return {
            type: ORDER_BY_HEIGHT,
            payload: value
        }
};

export const orderByWeight = (value) => {
    return {
            type: ORDER_BY_WEIGHT,
            payload: value
        }
};
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
    SET_STATE_DETAIL_POKEMON } from "../actions/actionTypes";

const initialState = {
    pokemons: [],
    pokemon: {},
    allTypes: [],
    filteredPokemons: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
                filteredPokemons: action.payload
            }
        case SEARCH_POKEMON_BY_NAME:
            return {
                ...state,
                pokemons: action.payload
            }
        case GET_POKEMON_BY_ID:
            return {
                ...state,
                pokemon: action.payload
            }
        case SET_STATE_DETAIL_POKEMON:
            return {
                ...state,
                pokemon: action.payload
            }    
        case GET_ALL_TYPES:
            return {
                ...state,
                allTypes: action.payload
            }   
        case POST_CREATED_POKEMON:
            return {
                ...state,
                pokemons: [...state.pokemons, action.payload]
            }
        case FILTER_POKEMON_BY_TYPE:
            const allPokemons = state.filteredPokemons;
            const filterTypes = allPokemons.filter(p => p.types.includes(action.payload))
            return {
                ...state,
                pokemons: filterTypes
                }          
        case FILTER_POKEMON_CREATED:
            const allSavedPokemons = state.filteredPokemons;
            const filterCreateOrExisting = action.payload === "created" ? allSavedPokemons.filter(p => p.id_Pokemon.length > 20) : allSavedPokemons.filter(p => p.id_Pokemon <= 40); 
            return {
                ...state,
                pokemons: filterCreateOrExisting
                }
        case ORDER_BY_NAME:
            const order = action.payload === "ascending" ? 
            state.pokemons.sort((a, b) => {
                let first = a.name.toLowerCase();
                let second = b.name.toLowerCase();
                if(first > second) return 1;
                if(first < second) return -1;
                return 0;
            }) :
            state.pokemons.sort((a, b) => {
                let first = a.name.toLowerCase();
                let second = b.name.toLowerCase();
                if(first > second) return -1;
                if(first < second) return 1;
                return 0;
            });
            return {
                ...state,
                pokemons: order
                }

        case ORDER_BY_ATTACK:
            const orderAttack = action.payload === "ascending" ? 
            state.pokemons.sort((a, b) => {
                return a.attack - b.attack;
            }) :
            state.pokemons.sort((a, b) => {
                return b.attack - a.attack;
            });
            return {
                ...state,
                pokemons: orderAttack
                }
        case ORDER_BY_DEFENSE:
            const orderDefense = action.payload === "ascending" ? 
            state.pokemons.sort((a, b) => {
                return a.defense - b.defense;
            }) :
            state.pokemons.sort((a, b) => {
                return b.defense - a.defense;
            });
            return {
                ...state,
                pokemons: orderDefense
                }
        case ORDER_BY_HEALTH:
            const orderHealth = action.payload === "ascending" ? 
            state.pokemons.sort((a, b) => {
                return a.health - b.health;
            }) :
            state.pokemons.sort((a, b) => {
                return b.defense - a.defense;
            });
            return {
                ...state,
                pokemons: orderHealth
                }
        case ORDER_BY_SPEED:
            const orderSpeed = action.payload === "ascending" ? 
            state.pokemons.sort((a, b) => {
                return a.speed - b.speed;
            }) :
            state.pokemons.sort((a, b) => {
                return b.speed - a.speed;
            });
            return {
                ...state,
                pokemons: orderSpeed
                }
        case ORDER_BY_HEIGHT:
            const orderHeight = action.payload === "ascending" ? 
            state.pokemons.sort((a, b) => {
                return a.height - b.height;
            }) :
            state.pokemons.sort((a, b) => {
                return b.height - a.height;
            });
            return {
                ...state,
                pokemons: orderHeight
                }
        case ORDER_BY_WEIGHT:
            const orderWeight = action.payload === "ascending" ? 
            state.pokemons.sort((a, b) => {
                return a.weight - b.weight;
            }) :
            state.pokemons.sort((a, b) => {
                return b.weight - a.weight;
            });
            return {
                ...state,
                pokemons: orderWeight
                }
        default:
            return state
    }
};

export default rootReducer;
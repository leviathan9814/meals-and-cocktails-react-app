import {CocktailsAPI} from "../api/cocktailsAPI";
import {stopSubmit} from "redux-form";

const SET_COCKTAILS = "SET_COCKTAILS";
const SET_COCKTAIL_DETAILS = "SET_COCKTAIL_DETAILS";
const SET_SEARCH_RESULT = "SET_SEARCH_RESULT";
const SET_LOADED = "SET_LOADED";

let initialState = {
    cocktails: [],
    cocktailDetails: [],
    searchResult: [],
    isLoaded: false
}

const cocktailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COCKTAILS: {
            return { 
                ...state,
                cocktails: action.cocktails
            }
        }
        case SET_COCKTAIL_DETAILS: {
            return { 
                ...state,
                cocktailDetails: action.cocktailDetails
            }
        }
        case SET_SEARCH_RESULT: {
            return { 
                ...state,
                searchResult: action.searchResult
            }
        }
        case SET_LOADED:
            return {
                ...state,
                isLoaded: action.payload,
            };
        default:
            return state;
    }
}

const setCocktails = (cocktails) => ({type: SET_COCKTAILS, cocktails});
const setCocktailDetails = (cocktailDetails) => ({type: SET_COCKTAIL_DETAILS, cocktailDetails});
const setSearchResult = (searchResult) => ({type: SET_SEARCH_RESULT, searchResult});
export const setLoaded = (payload) => ({type: SET_LOADED, payload});

export const getCocktails = () => async (dispatch) => {
    const data = await CocktailsAPI.getCocktails();
    dispatch(setCocktails(data.drinks));
    dispatch(setLoaded(true));
    // console.log(data.drinks);
}

export const getCocktailDetails = (cocktailId) => async (dispatch) => {
    const data = await CocktailsAPI.getCocktailDetails(cocktailId);
    dispatch(setCocktailDetails(data.drinks[0]));
    dispatch(setLoaded(true));
}

export const searchCocktail = (searchTerm) => async (dispatch) => {
    const data = await CocktailsAPI.searchCocktail(searchTerm);
    dispatch(setSearchResult(data.drinks));
    // if (data.status === 200) {
    //     dispatch(setSearchResult(data.drinks));
    // } else {
    //     let message = "There is no such cocktail";
    //     dispatch(stopSubmit("login", {_error: message}));
    // }
}

export default cocktailsReducer;
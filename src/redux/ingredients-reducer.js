import {MealsAPI} from "../api/mealsAPI";

const SET_INGREDIENTS = "SET_INGREDIENTS";
const SET_LOADED = "SET_LOADED";

let initialState = {
    ingredients: [],
    isLoaded: false
}

const IngredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INGREDIENTS: {
            return { 
                ...state,
                ingredients: action.ingredients
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

const setIngredients = (ingredients) => ({type: SET_INGREDIENTS, ingredients});

export const setLoaded = (payload) => ({type: SET_LOADED, payload});

export const getIngredients = () => async (dispatch) => {
    const data = await MealsAPI.getIngredients();
    dispatch(setIngredients(data.meals));
    dispatch(setLoaded(true));
}


export default IngredientsReducer;
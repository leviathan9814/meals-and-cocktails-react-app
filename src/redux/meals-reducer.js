import {MealsAPI} from "../api/mealsAPI";

const SET_MEALS = "SET_MEALS";
const SET_MEAL_DEATAILS = "SET_MEAL_DEATAILS";

const SET_SEARCH_RESULT = "SET_SEARCH_RESULT";
const SET_LOADED = "SET_LOADED";

let initialState = {
    meals: [],
    mealDetails: [],
    searchResult: [],
    isLoaded: false
}

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MEALS: {
            return { 
                ...state,
                meals: action.meals
            }
        }
        case SET_MEAL_DEATAILS: {
            return { 
                ...state,
                mealDetails: action.mealDetails
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

const setMeals = (meals) => ({type: SET_MEALS, meals});

const setMealDetails = (mealDetails) => ({type: SET_MEAL_DEATAILS, mealDetails});

const setSearchResult = (searchResult) => ({type: SET_SEARCH_RESULT, searchResult});

export const setLoaded = (payload) => ({type: SET_LOADED, payload});

export const getMeals = () => async (dispatch) => {
    const data = await MealsAPI.getMeals();
    dispatch(setMeals(data.meals));
    dispatch(setLoaded(true));
    // console.log(data.meals);
}

export const getMealDetails = (mealId) => async (dispatch) => {
    const data = await MealsAPI.getMealDetails(mealId);
    dispatch(setMealDetails(data.meals[0]));
    dispatch(setLoaded(true));
    // console.log(data.meals);
}

export const searchMeal = (searchTerm) => async (dispatch) => {
    const data = await MealsAPI.searchMeal(searchTerm);
    dispatch(setSearchResult(data.meals));
    console.log(data.meals);
}




export default mealsReducer;
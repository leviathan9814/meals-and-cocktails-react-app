
const ADD_MEAL_TO_FAVORITE = "ADD_MEAL_TO_FAVORITE";
const ADD_DRINK_TO_FAVORITE = "ADD_DRINK_TO_FAVORITE";
const REMOVE_ITEM = "REMOVE_ITEM";
const DELETE_FAVORITE = "DELETE_FAVORITE";

let initialState = {
    mealItems: [],
    drinkItems: [],
    totalItem: 0
}

const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MEAL_TO_FAVORITE: {
            const {items} = action.payload;
            const checkMeal =  state.mealItems.find(i => i.id === items.idMeal);

            if (checkMeal) {
                return state;
            } else {
                return {
                    ...state,
                    mealItems: [...state.mealItems, items]
                }
            } 
        }
        case ADD_DRINK_TO_FAVORITE: {
            const {items} = action.payload;
            const checkDrink =  state.drinkItems.find(i => i.id === items.idDrink);

            if (checkDrink) {
                return state;
            } else {
                return {
                    ...state,
                    drinkItems: [...state.drinkItems, items]
                }
            } 
        }
        case REMOVE_ITEM: {
            const filteredMeal = state.mealItems.filter(i => i.idMeal !== action.payload);
            const filteredDrink = state.drinkItems.filter(i => i.idDrink !== action.payload);
            return {
                ...state,
                mealItems: filteredMeal,
                drinkItems: filteredDrink
            }
        }
        case DELETE_FAVORITE: 
            return {
                ...state,
                mealItems: [],
                drinkItems: []
            }
        default:
            return state;
    }
}

export const addMealToFavorite = (items) => ({type: ADD_MEAL_TO_FAVORITE, payload: {items}});

export const addDrinkToFavorite = (items) => ({type: ADD_DRINK_TO_FAVORITE, payload: {items}});

export const removeItem = (id) => ({type: REMOVE_ITEM, payload: id});

export const deleteFavorite = () => ({type: DELETE_FAVORITE});

export default favoriteReducer;
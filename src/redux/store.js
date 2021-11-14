import {createStore, combineReducers, applyMiddleware} from "redux";
import mealsReducer from "./meals-reducer";
import cocktailsReducer from "./cocktails-reducer";
import favoriteReducer from "./favorite-reducer";
import ingredientsReducer from "./ingredients-reducer";
import cartReducer from "./cart-reducer";
import {reducer as formReducer} from "redux-form";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
    mealList: mealsReducer,
    cocktailList: cocktailsReducer,
    favoriteList: favoriteReducer,
    ingList: ingredientsReducer,
    cart: cartReducer,
    form: formReducer
})

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_ITEM = "REMOVE_ITEM";
const DELETE_ALL_ITEM = "DELETE_ALL_ITEM";
const SET_LOADED = "SET_LOADED";


let initialState = {
    cart: [],
    totalItem: 0,
    isLoaded: false
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const {items} = action.payload;
            const checkItem =  state.cart.find(i => i.id === items.idIngredient);

            if (checkItem) {
                return state;
            } else {
                return {
                    ...state,
                    cart: [...state.cart, items]
                }
            } 
        }
        case REMOVE_ITEM: {
            const filteredCart = state.cart.filter(i => i.idIngredient !== action.payload);
            return {
                ...state,
                cart: filteredCart,
            }
        }
        case DELETE_ALL_ITEM: 
            return {
                ...state,
                cart: [],
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

export const addToCart = (items) => ({type: ADD_TO_CART, payload: {items}});

export const removeItem = (id) => ({type: REMOVE_ITEM, payload: id});

export const deleteAllItem = () => ({type: DELETE_ALL_ITEM});

export const setLoaded = (payload) => ({type: SET_LOADED, payload});

export default cartReducer;
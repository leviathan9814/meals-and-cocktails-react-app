import React from "react";
import MealItem from "./mealItem";
import DrinkItem from "./drinkItem";
import { useSelector, useDispatch } from "react-redux";
import "./favorite.scss";
import { deleteFavorite } from "../../redux/favorite-reducer";

const Favorite = () => {
    
    const {mealItems, drinkItems} = useSelector(state => state.favoriteList);

    const dispatch = useDispatch();


    return (
        <>
            {mealItems.length > 0 || drinkItems.length > 0
                ? <div className="favorite">
                    <h2>Your favorite:</h2>
                    <div className="box-container">
                        {mealItems.map(item => <MealItem item={item}/>)}
                        {drinkItems.map(item => <DrinkItem item={item}/>)}
                    </div>
                    <button className="btn" onClick={() => dispatch(deleteFavorite())}>Delete all favorite</button>
                </div>
                : <span className="empty">Your favorite list is empty</span>
            }
        </>
    )

}

export default Favorite;

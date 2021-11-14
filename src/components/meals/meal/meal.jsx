import React from "react";
import {Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import {addMealToFavorite} from "../../../redux/favorite-reducer";
import "../meals.scss";

const Meal = ({meal}) => {

    const dispatch = useDispatch();

    return (
        <div class="box">
            <Link to="#"
                className="fas fa-heart"
                title="Add to favourites"
                onClick={() => dispatch(addMealToFavorite(meal))}>
            </Link>
            <Link to={`/meal/${meal.idMeal}`} className="fas fa-eye" title="View details"></Link>
            <img src={meal.strMealThumb} alt=""/>
            <h3>{meal.strMeal}</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
            </div>
            {/* <span>$15.99</span>
            <Link to="#" className="btn">add to cart</Link> */}
        </div>
    )
}


export default Meal;
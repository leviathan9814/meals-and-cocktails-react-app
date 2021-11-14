import React from "react";
import {Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeItem } from "../../redux/favorite-reducer";

import "./favorite.scss";

const MealItem = ({item}) => {

    const dispatch = useDispatch();

    return (
        <div key={item.idMeal} class="box">
            <Link to="#"
                className="fas fa-times"
                title="Remove"
                onClick={() => dispatch(removeItem(item.idMeal))}>
            </Link>
            <img src={item.strMealThumb} alt=""/>
            <h3>{item.strMeal}</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
            </div>
            <Link to={`/meal/${item.idMeal}`} className="btn">View details</Link>
        </div>
    )

}

export default React.memo(MealItem);

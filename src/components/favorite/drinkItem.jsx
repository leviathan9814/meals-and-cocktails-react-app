import React from "react";
import {Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeItem } from "../../redux/favorite-reducer";

import "./favorite.scss";

const DrinkItem = ({item}) => {

    const dispatch = useDispatch();

    return (
        <div key={item.idDrink} class="box">
            <Link to="#"
                className="fas fa-times"
                title="Remove"
                onClick={() => dispatch(removeItem(item.idDrink))}>
            </Link>
            <img src={item.strDrinkThumb} alt=""/>
            <h3>{item.strDrink}</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
            </div>
            <Link to={`/cocktail/${item.idDrink}`} className="btn">View details</Link>
        </div>
    )

}

export default DrinkItem;

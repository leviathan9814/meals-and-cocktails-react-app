import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addDrinkToFavorite} from "../../../redux/favorite-reducer";

import "../cocktails.scss";

const Cocktail = ({cocktail}) => {

    const dispatch = useDispatch();

    return (
        <div className="box">
            <div className="image">
                <img src={cocktail.strDrinkThumb} alt=""/>
                <Link to="#" className="fas fa-heart"
                    title="Add to favourites"
                    onClick={() => dispatch(addDrinkToFavorite(cocktail))}>
                </Link>
                <Link to={`/cocktail/${cocktail.idDrink}`} className="fas fa-eye" title="View details"></Link>
            </div>
            <div className="content">
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <h3>{cocktail.strDrink}</h3>
                <p>{cocktail.alcoholic}</p>
                {cocktail.strTags?.split(",").map(tag => <Link to="#" className="btn">{tag}</Link>)}
            </div>
        </div>
    )

}

export default Cocktail;
import React from "react";
import { Link } from "react-router-dom";
import mealPhoto from "../../assets/images/meal.png";
import cocktailPhoto from "../../assets/images/cocktail.jpg";

import "./search.scss";

const Search = () => {

    return (
        <div className="search">
            <h1>Search:</h1>
            <div className="link-items">
                <Link to="/search-meal" className="link-item">
                    <img src={mealPhoto} className="search-img" alt="meal" /> Meal
                </Link>
                <span>or</span>
                <Link to="/search-cocktail" className="link-item">
                    <img src={cocktailPhoto} className="search-img" alt="cocktail" /> Cocktail
                </Link>
            </div>
        </div>
    )
}

export default Search;
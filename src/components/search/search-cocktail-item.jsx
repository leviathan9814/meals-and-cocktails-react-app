import React from "react";

import "./search.scss";

const SearchCocktailItem = ({item}) => {

    return (
        <div class="box">
            <img src={item.strDrinkThumb} alt=""/>
            <h3>{item.strDrink}</h3>
        </div>
    )
}

export default SearchCocktailItem;
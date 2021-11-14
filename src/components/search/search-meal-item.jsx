import React from "react";

import "./search.scss";

const SearchMealItem = ({item}) => {

    return (
        <div class="box">
            <img src={item.strMealThumb} alt=""/>
            <h3>{item.strMeal}</h3>
        </div>
    )
}

export default SearchMealItem;
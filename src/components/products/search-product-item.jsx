import React from "react";


const SearchProductlItem = ({item}) => {

    return (
        <div key={item.idMeal} class="box">
            <img src={item.strMealThumb} alt=""/>
            <h3>{item.strMeal}</h3>
        </div>
    )
}

export default SearchProductlItem;
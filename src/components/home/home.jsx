import React from "react";
import HomeItem from "./home-item/home-item";
import Meals from "../meals/meals";
import Restaurants from "../restaurants/restaurants";
import Review from "../review/review";
import Cocktails from "../cocktails/cocktails";
import {useSelector} from "react-redux";

import "./home.scss";

const Home = () => {

    const meals = useSelector(state => state.mealList.meals);
    const cocktails = useSelector(state => state.cocktailList.cocktails);
    console.log(meals);
    console.log(cocktails);


    return (
        <section className="home" id="home">
            <HomeItem/>
            <Meals meals={meals}/>
            <Cocktails cocktails={cocktails}/>
            <Restaurants/>
            <Review/>
        </section>
    )
}

export default Home;
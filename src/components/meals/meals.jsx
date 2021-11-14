import React from "react";
import Meal from "./meal/meal";
import { useSelector } from "react-redux";
import MealLoader from "../content-loader/meal-loader";

import "./meals.scss";

const Meals = ({meals}) => {

    const {isLoaded} = useSelector(state => state.mealList);
 
    return (
        <section className="meals" id="meals">

        <h3 className="sub-heading">Meals</h3>
        <h1 className="heading">popular meals</h1>

        <div class="box-container">
            {isLoaded
                ? meals.map(meal => <Meal meal={meal} key={meal.idMeal}/>)
                : Array(10)
                    .fill(0)
                    .map((_, index) => <MealLoader key={index}/>)
            }
        </div>

        </section>
    )

}

export default Meals;
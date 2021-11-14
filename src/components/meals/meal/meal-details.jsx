import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {withRouter, useParams} from "react-router-dom";
import { getMealDetails } from "../../../redux/meals-reducer";
import DetailsLoader from "../../content-loader/details-loader";

import "../meals.scss";

const MealDetails = () => {

    const {mealDetails, isLoaded} = useSelector(state => state.mealList);

    const dispatch = useDispatch();

    const {mealId} = useParams();

    useEffect(() => {
        // let mealId = props.match.params.mealId;
        dispatch(getMealDetails(mealId));
    }, []);

    return (
       <>
        {isLoaded
            ? <div className="meal-details" key={mealDetails.idMeal}>
                <div className="img">
                    <h2>{mealDetails.strMeal}</h2>
                    <span>{mealDetails.strArea}</span>
                    <img src={mealDetails.strMealThumb} alt=""/>
                </div>
               
                <div className="descr">
                   <div className="ingredients-measures">
                    <div className="ingredients">
                            <h3>Ingredients:</h3>
                            <span>&#10102; {mealDetails.strIngredient1}</span>
                            <span>&#10103; {mealDetails.strIngredient2}</span>
                            <span>&#10104; {mealDetails.strIngredient3}</span>
                            <span>&#10105; {mealDetails.strIngredient4}</span>
                            <span>&#10106; {mealDetails.strIngredient5}</span>
                        </div>
                        <div className="measures">
                            <h3>Measure:</h3>
                            <span>&#10102; {mealDetails.strMeasure1}</span>
                            <span>&#10103; {mealDetails.strMeasure2}</span>
                            <span>&#10104; {mealDetails.strMeasure3}</span>
                            <span>&#10105; {mealDetails.strMeasure4}</span>
                            <span>&#10106; {mealDetails.strMeasure5}</span>
                        </div>
                   </div>
                    <div className="instuctions">
                        <h3>Instuctions:</h3>
                        <span>{mealDetails.strInstructions}</span>
                    </div>
                </div>
            </div>
            : <DetailsLoader/>
        }
       </>
    )

}

export default withRouter(MealDetails);
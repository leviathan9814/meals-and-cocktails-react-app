import React, {useEffect, useState} from "react";
import { useSelector, useDispatch} from "react-redux";
import { useParams, withRouter } from "react-router-dom";
import {getCocktailDetails} from "../../../redux/cocktails-reducer";
import flagDE from "../../../assets/images/germany.png";
import flagGBR from "../../../assets/images/united-kingdom.png";
import DetailsLoader from "../../content-loader/details-loader";

import "../cocktails.scss";

const CocktailDetails = () => {

    const [language, setLanguage] = useState({
        GBR: true,
        DE: false,
    });

    const {cocktailDetails, isLoaded} = useSelector(state => state.cocktailList);
    console.log(cocktailDetails);

    const dispatch = useDispatch();

    const {cocktailId} = useParams();

    useEffect(() => {
        dispatch(getCocktailDetails(cocktailId));
    }, []);


    return (
        <>
            {isLoaded 
                ? <div className="meal-details" key={cocktailDetails.idDrink}>
                    <div className="img">
                        <h2>{cocktailDetails.strDrink}</h2>
                        <span>{cocktailDetails.strAlcoholic}</span>
                        <img src={cocktailDetails.strDrinkThumb} alt=""/>
                    </div>
                    
                    <div className="descr">
                        <div className="ingredients-measures">
                        <div className="ingredients">
                                <h3>Ingredients:</h3>
                                <span>&#10102; {cocktailDetails.strIngredient1}</span>
                                <span>&#10103; {cocktailDetails.strIngredient2}</span>
                                <span>&#10104; {cocktailDetails.strIngredient3}</span>
                                <span>&#10105; {cocktailDetails.strIngredient4}</span>
                                <span>&#10106; {cocktailDetails.strIngredient5}</span>
                            </div>
                            <div className="measures">
                                <h3>Measure:</h3>
                                <span>&#10102; {cocktailDetails.strMeasure1}</span>
                                <span>&#10103; {cocktailDetails.strMeasure2}</span>
                                <span>&#10104; {cocktailDetails.strMeasure3}</span>
                                <span>&#10105; {cocktailDetails.strMeasure4}</span>
                                <span>&#10106; {cocktailDetails.strMeasure5}</span>
                            </div>
                        </div>
                        <div className="instuctions">
                            <div className="select-language">
                                <h3>Instuctions:</h3>
                                <div className="language">
                                    <span>Select language:</span>
                                    <img className="language-img" src={flagGBR} alt="GBR" onClick={() => setLanguage({GBR: true, DE: false})} />
                                    <img className="language-img" src={flagDE} alt="DE" onClick={() => setLanguage({GBR: false, DE: true})} />
                                </div>
                            </div>
                            <div>
                                {
                                    language.GBR    
                                    ? <span>{cocktailDetails.strInstructions}</span>                 
                                    : <span>{cocktailDetails.strInstructionsDE || "Sorry, take another language"}</span>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                : <DetailsLoader/>
            }
        </>
    )

}

export default withRouter(CocktailDetails);
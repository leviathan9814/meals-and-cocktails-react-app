import React from "react";
import Cocktail from "./cocktail/cocktail";
import { useSelector } from "react-redux";
import CockatailLoader from "../content-loader/cocktail-loader";

import "./cocktails.scss";

const Cocktails = ({cocktails}) => {

    const{isLoaded} = useSelector(state => state.cocktailList);

    return (
        <section class="cocktails" id="cocktails">
        
            <h3 class="sub-heading"> cocktails </h3>
            <h1 class="heading"> Most popular cocktails </h1>

            <div  className="box-container">
                {isLoaded
                    ? cocktails.map(cocktail => <Cocktail cocktail={cocktail} key={cocktail.idDrink}/>)
                    : Array(10)
                        .fill(0)
                        .map((_, index) => <CockatailLoader key={index} />)    
                }
            </div>

        </section>
    )
}

export default Cocktails;
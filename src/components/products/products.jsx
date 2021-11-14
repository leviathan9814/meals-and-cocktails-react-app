import React, {useEffect} from "react";
import ProductItem from "./product-item";
import {useDispatch, useSelector} from "react-redux";
import {getIngredients} from "../../redux/ingredients-reducer";
import MealLoader from "../content-loader/meal-loader";


import "./products.scss";

const Products = ({ingredients}) => {

    const {isLoaded} = useSelector(state => state.ingList);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIngredients());
    }, []);

    return (
        <div className="products">
            <h2>Choose products from us and we will deliver them to you</h2>
            <h3>All products:</h3>
            <div className="box-container">
                {isLoaded
                    ? ingredients.map(item => <ProductItem item={item}/>)
                    : Array(20)
                    .fill(0)
                    .map((_, index) => <MealLoader key={index} />)
                }
            </div>
        </div>
    )

}

export default Products;

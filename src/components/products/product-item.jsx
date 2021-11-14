import React from "react";
import {Link} from "react-router-dom";
import { addToCart } from "../../redux/cart-reducer";
import { useDispatch } from "react-redux";

import "./products.scss";

const ProductItem = ({item}) => {

    const dispatch = useDispatch();

    return (
        <div key={item.idIngredient} class="box">
            <Link to="#" className="fas fa-eye" title="View details"></Link>
            <img src="https://via.placeholder.com/250" alt="" />
            <h3>{item.strIngredient}</h3>
            {/* <span className="prod-descr">{item.strDescription}</span> */}
            <button className="btn" onClick={() => dispatch(addToCart(item))}>add to cart</button>
        </div>
    )

}

export default ProductItem;

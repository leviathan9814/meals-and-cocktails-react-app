import React from "react";
import {Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeItem } from "../../redux/cart-reducer";

import "./cart.scss";

const CartItem = ({item}) => {

    const dispatch = useDispatch();

    return (
        <div key={item.idIngredient} class="box">
            <Link to="#"
                className="fas fa-times"
                title="Remove"
                onClick={() => dispatch(removeItem(item.idIngredient))}>
            </Link>
            <img src="https://via.placeholder.com/250" alt="" />
            <h3>{item.strIngredient}</h3>
        </div>
    )

}

export default CartItem;

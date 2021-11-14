import React, {useState} from "react";
import CartItem from "./cart-item";
import { useSelector, useDispatch } from "react-redux";
import { deleteAllItem } from "../../redux/cart-reducer";
import Modal from "react-modal";
import Order from "../order/order";
import MealLoader from "../content-loader/meal-loader";

import "./cart.scss";


Modal.setAppElement("#root");

const Cart = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    const {cart, isLoaded} = useSelector(state => state.cart);
    console.log(cart);

    const dispatch = useDispatch();


    return (
        <>
            {cart.length > 0
                ? <div className="cart">
                    <h2>Your Cart:</h2>
                    <div className="box-container">
                        {isLoaded
                            ? cart.map(item => <CartItem item={item}/>)
                            : Array(5)
                                .fill(0)
                                .map((_, index) => <MealLoader key={index} />)
                        }
                    </div>
                    <div className="cart-btn">
                        <button className="btn" onClick={() => dispatch(deleteAllItem())}>Delete all</button>
                        <button className="btn" onClick={() => setModalIsOpen(true)}>Order</button>
                    </div>
                    <Modal isOpen={modalIsOpen}
                        onRequestClose={() => setModalIsOpen(false)}
                        className="modal"
                        preventScroll={true}>
                        <div className="modal-title">
                            <h2>Дані для замовлення</h2>
                            <span onClick={() => setModalIsOpen(false)}>&#10006;</span>
                        </div>
                        <Order setModalIsOpen={setModalIsOpen}/>
                    </Modal>
                </div>
                : <span className="empty">Your cart is empty</span>
            }
        </>
    )

}

export default Cart;

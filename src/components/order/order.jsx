import React from "react";
import { Field, reduxForm } from "redux-form";
import {Link} from "react-router-dom";
import {createNewField, Input, Textarea} from "../form-controls/form-controls";
import {required} from "../validators/validators";

import "./order.scss";

const Order = ({setModalIsOpen}) => (
    <section className="order" id="order">

        <OrderReduxForm setModalIsOpen={setModalIsOpen}/>

    </section>
               
)

const OrderForm = ({handleSubmit, setModalIsOpen}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div className="inputBox">
                <div className="input">
                    <span>your name</span>
                    {createNewField(Input, "yourName", [required], "enter your name")}
                </div>
                <div className="input">
                    <span>your number</span>
                    {createNewField(Input, "yourNumber", [required], "enter your number")}
                </div>
            </div>

            {/* <div className="inputBox">
                <div className="input">
                    <span>date and time</span>
                    <Field name="date" type="datetime-local"/>
                </div>
            </div> */}
            
            <div className="inputBox">
                <div className="input">
                    <span>your address</span>
                    {createNewField(Textarea, "yourAddress", [required], "enter your address", {cols: 30, rows: 10})}
                </div>
                <div className="input">
                    <span>your message</span>
                    {createNewField(Textarea, "yourMessage", [], "enter your message", {cols: 30, rows: 10})}
                </div>
            </div>

            <Link to="/" className="btn">order now</Link>

            <Field component="button"
                name="backToCart"
                type="button"
                className="btn"
                validate={[]}
                onClick={() => setModalIsOpen(false)}
            >back to cart</Field>
        </form>
    )
}

const OrderReduxForm = reduxForm({form: "orderForm"})(OrderForm);


export default Order;
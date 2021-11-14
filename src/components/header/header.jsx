import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";

const Header = ({darkMode, setDarkMode}) => (
    <header>
        <Link to="/" className="logo"><i className="fas fa-utensils"></i>Meal&Cocktails</Link>

        <nav className="navbar">
            <Link to="/" className="active">Home</Link>
            <Link to="#meals">Meals</Link>
            <Link to="#cocktails">Cocktails</Link>
            <Link to="#restaurants">Restaurants</Link>
            <Link to="#review">Review</Link>
            <Link to="/products">Products</Link>
        </nav>

        <div className="icons">
            <div className="toggle-container">
                <span style={{ color: darkMode ? "grey" : "yellow", fontSize: "2.6rem" }}>☀︎</span>
                <span className="toggle">
                    <input
                    checked={darkMode}
                    onChange={() => setDarkMode(prevMode => !prevMode)}
                    id="checkbox"
                    className="checkbox"
                    type="checkbox"
                    />
                    <label htmlFor="checkbox" />
                </span>
                <span style={{ color: darkMode ? "slateblue" : "grey", fontSize: "2.6rem" }}>☾</span>
            </div>
            <div>
                <Link to="/search" className="fas fa-search" id="search-icon"></Link>
                <Link to="/favorite" className="fas fa-heart"></Link>
                <Link to="/cart" className="fas fa-shopping-cart"></Link>
            </div>
        </div>
    </header>
)

export default Header;
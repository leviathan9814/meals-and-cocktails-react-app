import React from "react";
import loader from "../../assets/images/loader.gif";

import "./loader.scss";

const Loader = () => (
    <div class="loader-container">
        <img src={loader} alt=""/>
    </div>
)

export default Loader;
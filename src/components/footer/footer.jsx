import React from "react";
import { Link } from "react-router-dom";

import "./footer.scss";

const Footer = () => (

    <section className="footer">
        
        <div className="box-container">

            <div className="box">
                <h3>locations</h3>
                <Link to="#">USA</Link>
                <Link to="#">ukraine</Link>
                <Link to="#">russia</Link>
                <Link to="#">spain</Link>
                <Link to="#">france</Link>
            </div>

            <div className="box">
                <h3>contact info</h3>
                <Link to="#">+000-000-0000</Link>
                <Link to="#">+000-000-0000</Link>
                <Link to="#">askdkmasdsd@gmail.com</Link>
                <Link to="#">sadasdadsa@gmail.com</Link>
                <Link to="#">lviv, ukraine - 79007</Link>
            </div>

            <div className="box">
                <h3>follow us</h3>
                <Link to="#">facebook</Link>
                <Link to="#">twitter</Link>
                <Link to="#">instagram</Link>
                <Link to="#">linkedin</Link>
            </div>

        </div>

        <div class="credit"> copyright @ 2021</div>
    </section>

);

export default Footer;
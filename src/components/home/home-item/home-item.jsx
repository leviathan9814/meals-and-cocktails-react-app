import React from "react";
import {Link} from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';

import home1 from "../../../assets/images/home-img-1.png";
import home2 from "../../../assets/images/home-img-2.png";
import home3 from "../../../assets/images/home-img-3.png";

import "./home-item.scss";
import 'swiper/swiper.scss';

const HomeItem = () => (

        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide>
                <div className="slide">
                    <div className="content">
                        <h3>our meals</h3>
                        <p>Here you can learn recipes and choose products for their preparation</p>
                        {/* <Link to="#" className="btn">order now</Link> */}
                    </div>
                    <div className="image">
                        <img src={home1} alt="" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide">
                    <div className="content">
                        <h3>our cocktails</h3>
                        <p>Also prepare a cocktail from anywhere in the world according to our recipes</p>
                        {/* <Link to="#" className="btn">order now</Link> */}
                    </div>
                    <div className="image">
                        <img src={home2} alt="" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide">
                    <div className="content">
                        <h3>our products</h3>
                        <p>List of all products that you can order</p>
                        <Link to="/products" className="btn">products</Link>
                    </div>
                    <div className="image">
                        <img src={home3} alt="" />
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
)

export default HomeItem;
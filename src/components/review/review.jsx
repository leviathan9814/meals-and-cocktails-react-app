import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import pic1 from "../../assets/images/pic-1.png";
import pic2 from "../../assets/images/pic-2.png";
import pic3 from "../../assets/images/pic-3.png";
import pic4 from "../../assets/images/pic-4.png";

import "./review.scss";
import 'swiper/swiper.scss';

const Review = () => (

    <section className="review" id="review">

        <h3 className="sub-heading"> customer's review </h3>
        <h1 className="heading"> what they say </h1>

            {/* <ReviewItem/> */}
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide>
                <div className="slide">
                    <i className="fas fa-quote-right"></i>
                    <div className="user">
                        <img src={pic1} alt=""/>
                        <div className="user-info">
                            <h3>john deo</h3>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide">
                    <i className="fas fa-quote-right"></i>
                    <div className="user">
                        <img src={pic2} alt=""/>
                        <div className="user-info">
                            <h3>john deo</h3>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide">
                    <i className="fas fa-quote-right"></i>
                    <div className="user">
                        <img src={pic3} alt=""/>
                        <div className="user-info">
                            <h3>john deo</h3>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide">
                    <i className="fas fa-quote-right"></i>
                    <div className="user">
                        <img src={pic4} alt=""/>
                        <div className="user-info">
                            <h3>john deo</h3>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.</p>
                </div>
            </SwiperSlide>
        </Swiper>
        

    </section>

);

export default Review;
import React from "react";
import './Testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import code from '../../img/code.jpg'
import mancity from '../../img/mancity.jpg'
import game from '../../img/game.png'
import profilePic4 from '../../img/profile4.jpg'
import { Pagination } from "swiper";
import 'swiper/css/pagination';

const Testimonials = () => {
    const clients = [
        {
            img: code,
            review: "Of course, devs have to code!"
        },
        {
            img: mancity,
            review: "I love football, I am very happy because I like this sport. Mancity in my heart."
        },
        {
            img: game,
            review: "Every guy loves to play games!"
        },
        {
            img: profilePic4,
            review: "That photo is not me!"
        }
    ]

    return (
        <div className="t-wrapper" id="Testimonials">
            <div className="t-heading">
                <span>Some of</span>
                <span>My</span>
                <span>favorites</span>
                <div className="blur t-blur1" style={{ background: 'var(--purple)' }}></div>
                <div className="blur t-blur2" style={{ background: 'skyblue' }}></div>
            </div>
            {/* slider */}
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {clients.map((client, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                                <img src={client.img} alt="" />
                                <span className="txtspan">{client.review}</span>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default Testimonials
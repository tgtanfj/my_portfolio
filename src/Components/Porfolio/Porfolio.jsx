import React, { useContext } from "react";
import './Porfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import healthcare from '../../img/healthcare.png'
import laptop from '../../img/laptop.png'
import mancityslider from '../../img/mancityslider.png'
import githubb from '../../img/githubb.png'
import 'swiper/css';
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";

const Porfolio = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    return (
        <div className="portfolio" id="Portfolio">
            {/* heading */}
            <span style={{color: darkMode ? 'white' : ''}}>Recent Projects</span>
            <span>Portfolio</span>
            {/* slider */}
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className='portfolio-slider'
            >
                <SwiperSlide><img src={healthcare} alt="" /></SwiperSlide>
                <SwiperSlide><img src={laptop} alt="" /></SwiperSlide>
                <SwiperSlide><img src={mancityslider} alt="" /></SwiperSlide>
                <SwiperSlide><img src={githubb} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Porfolio
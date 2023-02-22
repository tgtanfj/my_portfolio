import React, { useContext } from "react";
import './Works.css';
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { motion } from 'framer-motion'

const Works = () => {

    const transition = { duration: 2, type: 'spring' }

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    return (
        <div className="works">
            {/* left */}
            <div className="awesome">
                <span style={{ color: darkMode ? 'white' : '' }}>Works for All these</span>
                <span>Brands & Clients</span>
                <span>
                    fdasssssssssaslkfdjasklfjldkajf;afsdfoi2wjfdaffdasssssssssaslkfdjasklfjldkajf;afsdfoi2wjfdaf
                    <br />
                    fdasssssssssaslkfdjasklfjldkajf;afsdfoi2wjfdaf
                    <br />
                    fdasssssssssaslkfdjaskfdasssssssssaslkfdjasklfjldkajf;afsdfoi2wjfdaf
                    <br />
                    fdasssssssssaslkfdjaskfdasssssssssaslkfdjasklfjldkajf;afsdfoi2wjfdaf
                </span>
                <button className="button s-button">Hire me</button>
                <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
            </div>
            {/* right */}
            <div
                className="w-right">
                <motion.div
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    transition={{ duration: 3.5, type: 'spring' }}
                    viewport={{ margin: '-40px' }}
                    className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>
                </motion.div>
                {/* background circle */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    )
}

export default Works
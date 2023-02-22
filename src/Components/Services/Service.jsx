import React, { useContext } from "react";
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from "../Card/Card";
import Resume from '../../Components/Services/LeTrungTan_CV_EN_FINAL.pdf'
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { motion } from 'framer-motion'

const Services = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    const transition = { duration: 1, type: 'spring' }

    return (
        <div className="services" id="Services">
            <div className="awesome">
                <span style={{ color: darkMode ? 'white' : '' }}>My Awesome</span>
                <span>services</span>
                <span>
                    Coding makes me feel quite excited, but sometimes also makes me feel backache and body aches 😛.
                    <br />
                    But I still enjoy it.
                </span>
                <a href={Resume} download>
                    <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
            </div>
            <motion.div
                whileInView={{ left: '14rem' }}
                initial={{ left: '25rem' }}
                transition={transition}
                style={{ left: '14rem' }}
                className="cards">
                <Card
                    emoji={HeartEmoji}
                    heading={'Front-end'}
                    detail={'HTML, CSS(SCSS, Tailwind...), Javascript, React(Redux, Hooks...)'}
                />
            </motion.div>
            <motion.div
                whileInView={{ left: '-4rem' }}
                initial={{ left: '-14rem' }}
                transition={transition}
                style={{ left: '-4rem', top: '12rem' }}
                className="cards">
                <Card
                    emoji={Glasses}
                    heading={'English'}
                    detail={'I can read documents and communicate in basic English.'}
                />
            </motion.div>
            <motion.div
                whileInView={{ left: '12rem' }}
                initial={{ left: '25rem' }}
                transition={transition}
                style={{ top: '19rem', left: '12rem' }}
                className="cards">
                <Card
                    emoji={Humble}
                    heading={'UI/UX'}
                    detail={'Have basic knowledge of UI/UX, have the ability to learn and improve.'}
                />
            </motion.div>
            <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
        </div>
    )
}

export default Services
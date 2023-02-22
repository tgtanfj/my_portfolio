import React, { useContext } from "react";
import './intro.css'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { motion } from 'framer-motion'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Github from '@iconscout/react-unicons/icons/uil-github'

const Intro = () => {

    const transition = { duration: 2, type: 'spring' }

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? 'white' : '' }}>Hi, I am</span>
                    <span>TrungTan</span>
                    <span>Currently, I am a 4th year student, Duy Tan University. This is my Portfolio page, it will tell you stuff about me. 
                        <br/>
                        Let's explore together!
                    </span>
                </div>
                <button className="button i-button">Hire me</button>
                <div className="i-icons">
                    <a href="https://github.com/tgtanfj"><Github color='var(--orange)' size='5rem' /></a>
                    <a href="https://www.facebook.com/letrungtan10/"><Facebook color='var(--orange)' size='5rem' /></a>
                    <a href="https://www.instagram.com/tgtan17/"><Insta color='var(--orange)' size='5rem' /></a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <motion.img
                    initial={{ left: '-36%' }}
                    whileInView={{ left: '-24%' }}
                    transition={transition}
                    className='floating-div'
                    src={glassesimoji} alt="" />
                <motion.div
                    initial={{ left: '74%', top: '-4%' }}
                    whileInView={{ left: '68%' }}
                    transition={transition}
                    className='floating-div'
                    style={{ top: '-4%', left: '68%' }}>
                    <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
                </motion.div>
                <motion.div
                    initial={{ left: '9rem', top: '18.3rem' }}
                    whileInView={{ left: '1rem' }}
                    transition={transition}
                    className='floating-div'
                    style={{ top: '18.3rem', left: '1rem' }}>
                    <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award' />
                </motion.div>
                {/* blur div */}
                <div className="blur" style={{ background: 'rbg(236 210 255)' }}>
                </div>
                <div className="blur" style={{ background: '#C1F5FF', top: '17rem', width: '21rem', height: '11rem', left: '-9rem' }}></div>
            </div>

        </div>
    )
}

export default Intro
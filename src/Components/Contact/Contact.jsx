import React, { useContext, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";

const Contact = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    const [done, setDone] = useState(false) 

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_53f89ts', 'template_twonb1s', form.current, 'i8OJQQu6zHrLhaBNz')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className="contact-form" id='Contact'>
            <div className="w-left">
                <div className="awesome">
                    <span style={{color: darkMode ? 'white' : ''}}>Get in touch</span>
                    <span>Contact me</span>
                    <div className="blur s-blur1"
                    style={{background: '#ABF1FF94'}}
                    ></div>
                </div>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="user" placeholder="Name"/>
                    <input type="email" name="email" className="user" placeholder="Email"/>
                    <textarea name="message" className="user" placeholder="Message"></textarea>
                    <input type="submit" value='Send' className="button"/>
                    <span>{done && 'Thanks for contacting me!'}</span>
                    <div className="blur c-blur1"
                    style={{ background: 'var(--purple)'}}
                    ></div>
                </form>
            </div>
        </div>
    )
}

export default Contact
import React, { useContext } from "react";
import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Service";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Porfolio from "./Components/Porfolio/Porfolio";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";

function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div 
    style={{background: darkMode ? 'black' : '', color: darkMode ? 'white' : ''}}
    className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      <Porfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

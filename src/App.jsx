import React from "react";
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero.jsx/Hero";
const App = ()=>{
    return(
        <>
        <Navbar/>
        <div className="container">
            <Hero/>
        </div>
        </>
    )
}
export default App;

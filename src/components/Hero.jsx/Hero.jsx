import React from "react";
import './Hero.css';

const Hero =()=>{
    return (
        <section className="hero-container">
            <div className="hero-content">
                <h2>Hi there ! I am Sakthivel</h2>
                <p>Passionate Full Stack Developer | Transforming Ideas into seamless and
                    Visually & Logically Stunning Web Solutions
                </p>
            </div>

            <div className="hero-img">
                <div>
                    <div className="tech-icon java">
                        <img src="./assets/images/javaicon.png" alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src="./assets/images/reacticon.png" alt="" />
                    </div>
                    <img src="./assets/images/me.jpg"  alt="" />
                </div>

                <div>
                    <div className="tech-icon">
                        <img src="./assets/images/htmlicon.png" alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src="./assets/images/cssicon.png" alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src="./assets/images/jsicon.png" alt="" />
                    </div>
                </div>

            </div>


        </section>
    )
}

export default Hero
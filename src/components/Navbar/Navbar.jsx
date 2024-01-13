import React from "react"
import './Navbar.css'
import 'material-symbols'

const Navbar = ()=>{
    return(
        <div>
            <nav className="nav-wrapper">
                <div className="nav-content">
                    <img className="logo" src="./assets/images/" alt="Sakthivel name Logo" />
                    <ul>
                        <li>
                            <a className="menu-item" href="">Home</a>
                        </li>
                        <li>
                            <a className="menu-item" href="">Skills</a>
                        </li>
                        <li>
                            <a className="menu-item" href="">Projects</a>
                        </li>
                        <li>
                            <a className="menu-item" href="">Contact Me</a>
                        </li>
                        <button className="contect-btn" onClick={()=>{}}>
                            Hire me
                        </button>
                    </ul>

                    <button class= "menu-btn" onClick={()=>{}}>
                        <span 
                        class={"material-symbols-outlined"}
                        style={{fontSize:"1.8rem"}}
                        >
                            menu
                        </span>
                    </button>

                </div>

            </nav>
        </div>
    )
}

export default Navbar
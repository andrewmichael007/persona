import React from "react";
import "../Styles/App.css";

const MyNavbar = () => {
    return(
        <header>
                <nav className = "navbar-container">
        
                    <div className="bars-container">
                        <div id="top-bar"></div>
                        <div id="mid-bar"></div>
                        <div id="bottom-bar"></div>
                    </div> 
        
                    <div className = "logo-container">
                        <img src = " " alt = "logo" />
                        <h4> Andy </h4>
                    </div>
        
                    <div className = "options-container">
        
                        <div className = "nav opt1">
                            <a href = " " target = "_self">  
                                <h4> Home </h4>
                            </a>
                        </div>
                        <div className = "nav opt2">
                            <a href = " " target = "_self">
                                <h4> Coming Soon </h4>
                            </a>
                        </div>
                        <div className = "nav opt3">
                            <a href = " " target = "_self">
                                <h4> Blog </h4>
                            </a>
                        </div>
                        <div className = "nav opt4">
                            <a href = " " target = "_self">
                                <h4> Contact Me </h4>
                            </a>
                        </div>
        
                    </div> 
        
                 </nav>
        </header>
                
    );
};

export default MyNavbar;

import React from "react";
import "../Styles/App.css";

const MyNavbar = () => {
    return(
        <header>
                <nav className = "navbar">
                    <div>
                        <img src = " " alt = "logo" />
                    </div>
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
                  </nav>
        </header>
    );
};

export default MyNavbar;

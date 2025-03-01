import React from "react";
import "../Styles/App.css";

const MyNavbar = () => {
    return(
        <header>
                <nav className = "navbar">
                    <div>
                        <img src = " " alt = "logo" />
                    </div>
                    <div>
                        <a href = " " target = "_self">  
                             <h1> Home </h1>
                        </a>
                    </div>
                    <div>
                        <a href = " " target = "_self">
                            <h1> Coming Soon </h1>
                        </a>
                    </div>
                    <div>
                        <a href = " " target = "_self">
                            <h1> Blog </h1>
                        </a>
                    </div>
                    <div>
                        <a href = " " target = "_self">
                            <h1> Contact Me </h1>
                        </a>
                    </div>
                  </nav>
        </header>
    );
};

export default MyNavbar;

import React from "react";
import "../Styles/App.css";

const MyNavbar = () => {
    return(
        <header>
                <nav className = "navbar">
                    <div>
                        <h1> Home </h1>
                    </div>

                    <div>
                        <h1> Coming Soon </h1>
                    </div>

                    <div>
                        <h1> Blog </h1>
                    </div>

                    <div>
                        <h1> Contact Me </h1>
                    </div>
                  </nav>
        </header>
    );
};

export default MyNavbar;

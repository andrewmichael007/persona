import React from "react"; 
import "../Styles/App.css";
import logo from "../Assets/logo.svg";
import profile from "../Assets/profile.png";
import profilePic from "../Assets/profilePic.png";
import facebook from "../Assets/facebook.png";
import github from "../Assets/github.png";
import gmail from "../Assets/gmail.png";
import instagram from "../Assets/instagram.png";
import linkedin from "../Assets/instagram.png";
import twitter from "../Assets/twitter.png";
import whatsapp from "../Assets/whatsapp.png";
import twitterx from "../Assets/twitterx.png";


const MyNavbar = ({ toggleSidebar }) => {
    return(
        <header>
                <nav className = "navbar-container">
        
                    <div className="bars-container" onClick={toggleSidebar} >
                        <div id="top-bar"></div>
                        <div id="mid-bar"></div>
                        <div id="bottom-bar"></div>
                    </div> 

                    <div className = "logo-container">
                        <img src ={logo}  alt = "logo" />
                        <h4> NDY </h4>

                        {/* dot beside logo name */}
                        <div className = "dot"> 
                        
                        </div>
                    </div>

                    {/* designing a divider kinda line */}
                    <div className = "divider"> 

                    </div>
                
        
                    <div className = "options-container">
        
                        <div className = "nav opt1">
                            <a href = " " target = "_self">  
                                <h4> Home </h4>
                            </a>
                        </div>
                        <div className = "nav opt2">
                            <a href = " " target = "_self">
                                <h4> Soon </h4>
                            </a>
                        </div>
                        <div className = "nav opt3">
                            <a href = " " target = "_self">
                                <h4> Blog </h4>
                            </a>
                        </div>
                        <div className = "nav opt4">
                            <a href = " " target = "_self">
                                <h4> About </h4>
                            </a>
                        </div>
        
                    </div> 

                    <div className = "toggle-container" >
                        <div id = "parent">

                        </div>

                        {/* <!--small inside  button--> */}
                        <div id = "child">

                        </div>
                    </div>
                </nav>
        </header>
                
    );
};

const Main = () => {
    return(
        <main className = "main-container">
            <aside className = "info-holder">
                <div className = "text">
                    <h1 className = "wave">
                        👋
                    </h1>
                    <h2>
                        Adjei Michael 
                    </h2>
                    <h1>
                        Andrew
                    </h1>

                    <p>
                        Computer Engineer Student | Tech Enthusiast
                    </p>
                </div>

                <div className = "profile-pic">
                    <img src={profilePic} alt = "profile-picture" />
                </div>  
            </aside>
        </main>
    );
};

const Footer = () => {
    return(
        <footer className = "footer-container">
            <div className = "footer-info-holder">
                <p> Let's Connect ! </p>
                <div className = "socials-holder">
                    <div>
                        <a href = " " target = "_self">
                            <img src ={whatsapp} alt = "linkedin"/>
                        </a>
                    </div>
        
                    <div>
                        <a href = " " target = "_self">
                            <img src ={instagram} alt = "linkedin"/>
                        </a>
                    </div>

                    <div>
                        <a href = " " target = "_self">
                            <img src ={github} alt = "linkedin"/>
                        </a>
                    </div>


                    <div>
                        <a href = " " target = "_self">
                            <img src ={gmail} alt = "linkedin"/>
                        </a>
                    </div>

                    
                    <div>
                        <a href = " " target = "_self">
                            <img src ={linkedin} alt = "linkedin"/>
                        </a>
                    </div>

                    
                    <div>
                        <a href = " " target = "_self">
                            <img src ={twitterx} alt = "linkedin"/>
                        </a>
                    </div>

                    
                    <div>
                        <a href = " " target = "_self">
                            <img src ={facebook} alt = "linkedin"/>
                        </a>
                    </div>

                    
                    <div>
                        <a href = " " target = "_self">
                            <img src ={twitter} alt = "linkedin"/>
                        </a>
                    </div>
                   

                </div>
                <p> Copyright @ 2025 </p>
            </div>
        
        </footer>
    );
};
  

const Sidebar = ({ isOpen, onClose }) => {
    return( 
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <section className = "sidebar-head"> 
                <img src = {profile} alt = "profile-icon" />
                <h2> Profile </h2>

                {/* Bars for the close icon  */}
                <div className = "bars2" onClick={onClose}>
                    <div id = "forward-slash"></div>
                    <div id = "back-slash"> </div>
                </div> 
            </section>
        </div>  
    );
};


export { MyNavbar, Main, Footer, Sidebar };

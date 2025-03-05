import React from "react";
import "../Styles/App.css";
// import logo from "../assets/logo.svg";


const MyNavbar = ({toggleSidebar}) => {
    return(
        <header>
                <nav className = "navbar-container">
        
                    <div className="bars-container" onClick={toggleSidebar}>
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

                    <div className = "toggle-container">
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

const Main = ({ isOpen, onClose }) => {
    return(
        <main className = "main-container">
            <aside className = "info-holder">
                    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                            <section className = "sidebar-head"> 
                                    <h2> Profile </h2>

                                    {/* Bars for the close icon  */}
                                    <div className = "bars2" onClick={onClose}>
                                        <div id = "forward-slash"></div>
                                        <div id = "back-slash"> </div>
                                    </div> 
                            </section>             
                    </div>        
                    <data>
                        <h1>
                            Andrew Michael 
                        </h1>
                        <p>
                            Computer Engineer Student | Tech Enthusiast
                        </p>

                        <img src = " " alt = "profile-pic" />
                   </data>  
            </aside>
        </main>
    );
};

const Footer = () => {
    return(
        <footer className = "footer-container">
        
        </footer>
    );
};
  
// const Sidebar = ({ isOpen, onClose }) => {
//     return( 
//         <div className={`sidebar ${isOpen ? 'open' : ''}`}>
//             <section className = "sidebar-head"> 
//                 <h2> Profile </h2>

            
//                 {/* Bars for the close icon  */}
//                 <div className = "bars2" onClick={onClose}>
//                     <div id = "forward-slash"></div>
//                     <div id = "back-slash"> </div>
//                 </div> 

//             </section>
//         </div>  
//     );
// };


export { MyNavbar, Main, Footer };

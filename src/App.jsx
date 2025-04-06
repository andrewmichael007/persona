// import Test from "./Components/Test";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Styles/App.css";


import MyNavbar from "./Components/Home/Navbar/Navbar.jsx";
import "./Components/Home/Navbar/Navbar.module.css";

import Main from "./Components/Home/Main/Main.jsx";
import  "./Components/Home/Main/Main.module.css";


import Footer from "./Components/Home/Footer/Footer.jsx";
import  "./Components/Home/Footer/Footer.module.css";

import Test from "./Components/Learning/Learning.jsx";


// import Sidebar from "./Components/Home/Sidebar/Sidebar.jsx";
// import  "./Components/Home/Sidebar/Sidebar.module.css";




const App = () => {
    return(
        <Router>
            <div>
                {/* Pass toggleSidebar function to MyNavbar */}
                <MyNavbar />
            </div>

            <Routes>
                <Route  path = "/learning" element = { <Test /> } />
            </Routes>
            
            <div>
                {/* Sidebar component with toggle functionality */}
                {/* <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} /> */}

                <Main />
            </div>
        
                <Footer /> 
        </Router>
    );
};

export default App;

  

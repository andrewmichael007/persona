import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./Styles/App.css";


import MyNavbar from "./Components/Home/Navbar/Navbar.jsx";
// import "./Components/Home/Navbar/Navbar.module.css";




const App = () => {
    return(
        <Router>
            <div>
                {/* Pass toggleSidebar function to MyNavbar */}
                <MyNavbar />
            </div>

{/*             <Routes>
                <Route  path = "/learning" element = { <Test /> } />
            </Routes> */}
            
            <div>
                {/* Sidebar component with toggle functionality */}
                {/* <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} /> */}

{/*                 <Main /> */}
            </div>
        
{/*                 <Footer />  */}
        </Router>
    );
};

export default App;

// import Test from "./Components/Test";
import React from "react";
import "./Styles/App.css";


import MyNavbar from "./Components/Home/Navbar/Navbar.jsx";
import "./Components/Home/Navbar/Navbar.module.css";

import Main from "./Components/Home/Main/Main.jsx";
import  "./Components/Home/Main/Main.module.css";


import Footer from "./Components/Home/Footer/Footer.jsx";
import  "./Components/Home/Footer/Footer.module.css";


// import Sidebar from "./Components/Home/Sidebar/Sidebar.jsx";
// import  "./Components/Home/Sidebar/Sidebar.module.css";




const App = () => {
    // // State to manage sidebar visibility
    // const [isSidebarOpen, setIsSidebarOpen] = useState(false);


    // // Function to toggle the sidebar
    // const toggleSidebar = () => {
    //     setIsSidebarOpen(!isSidebarOpen); 
    // };
    
    //    // Function to close the sidebar
    // const closeSidebar = () => {
    //     setIsSidebarOpen(false);
    // };
    

    return(
        <div>
            <div>
                {/* Pass toggleSidebar function to MyNavbar */}
                <MyNavbar />
            </div>
            

            <div>
                {/* Sidebar component with toggle functionality */}
                {/* <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} /> */}

                <Main />
            </div>
        
                <Footer /> 
        </div>
    );
};

export default App;

  

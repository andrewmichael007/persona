// import Test from "./Components/Test";
import React, { useState } from "react";
import { MyNavbar, Main, Footer, Sidebar} from "./Components/Home";
import "./Styles/App.css";


const App = () => {
    // State to manage sidebar visibility
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Function to toggle the sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen); 
    };
    
       // Function to close the sidebar
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return(
        <div>
            {/* Pass toggleSidebar function to MyNavbar */}
            <MyNavbar toggleSidebar={toggleSidebar} />

            <div>
                {/* Sidebar component with toggle functionality */}
                <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

                <Main />
            </div>
        
                <Footer /> 
        </div>
    );
};

export default App;

  

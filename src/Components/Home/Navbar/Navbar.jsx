import { Link } from "react-router-dom";
import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../../Assets/logo.svg";


const MyNavbar = () => {
    return(
        <header className={styles.header}>
            <nav className={styles.navbar}>
                {/* Bars container */}
                <div className={styles.barsContainer}>
                    <div className={styles.topBar}></div>
                    <div className={styles.midBar}></div>
                    <div className={styles.bottomBar}></div>
                </div>

                {/* Logo section */}
                <div className={styles.logoContainer}>
                    <img src={logo} alt="logo" className={styles.logo} />
                    {/* <h4 className={styles.logoText}>NDY</h4> */}
                    <div className={styles.dot}></div>
                </div>

                {/* Divider */}
                <div className={styles.divider}></div>
            
                {/* Navigation options */}
                <div className={styles.optionsContainer}>
                    <div className={styles.navItem}>
                        <Link to ="/" target="_self" className={styles.navLink}>  
                            <h4> Home </h4>
                        </Link>
                    </div>
                    <div className={styles.navItem}>
                        <Link to ="./Learning"  className={styles.navLink}>
                            <h4> Learning </h4>
                        </Link>
                    </div>
                    <div className={styles.navItem}>
                        <a href="./about"  className={styles.navLink}>
                            <h4> About </h4>
                        </a>
                    </div>
                    <div className={styles.navItem}>
                        <a href="/about" target="_self" className={styles.navLink}>
                            <h4> Contact </h4>
                        </a>
                    </div>
                </div> 

                {/* Theme toggle */}
                <div className={styles.toggleContainer}>
                    <div className={styles.toggleParent}></div>
                    <div className={styles.toggleChild}></div>
                </div>
            </nav>
        </header>
    );
};

export default MyNavbar;


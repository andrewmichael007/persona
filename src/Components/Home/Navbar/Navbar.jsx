import { Link } from "react-router-dom";
import React from "react";
import styles from "./Navbar.module.css";


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

                {/* Navigation options */}
                <div className={styles.optionsContainer}>
                    <div className={styles.leftSide}>
                        <div className={styles.navItem}>
                            <Link to ="/" target="_self" className={styles.navLink}>
                                <h4> Home </h4>
                            </Link>
                        </div>
                        <div className={styles.navItem}>
                            <Link to ="./Learning" className={styles.navLink}>
                                <h4> Learning </h4>
                            </Link>
                        </div>
                    </div>

                    <div className={styles.rightStide}>
                        <div>
                            <Link to ="./about"  className={styles.navLink}>
                                <h4> About </h4>
                            </Link>
                        </div>
                        <div className={styles.navItem}>
                            <Link to ="/about" target="_self" className={styles.navLink}>
                                <h4> Contact </h4>
                            </Link>
                        </div>
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


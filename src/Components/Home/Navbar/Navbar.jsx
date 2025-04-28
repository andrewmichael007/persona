import { Link } from "react-router-dom";
import React from "react";
import styles from "./Navbar.module.css";


const MyNavbar = () => {
    return(
        <header className={styles.header}>
            <nav className={styles.navbar}>
                {/* Navigation options */}
                <div className={styles.leftOptions}>
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

                <div className={styles.rightOptions}>
                    <div className={styles.navItem}>
                        <Link to ="/" target="_self" className={styles.navLink}>
                            <h4> About </h4>
                        </Link>
                    </div>

                    <div className={styles.navItem}>
                        <Link to ="./Learning" className={styles.navLink}>
                            <h4> Contact </h4>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default MyNavbar;


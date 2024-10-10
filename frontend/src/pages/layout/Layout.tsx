import { Outlet, Link } from "react-router-dom";

import styles from "./Layout.module.css";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <div className={styles.headerContainer}>
                    <Link to="/" className={styles.headerTitleContainer}>
                        <img height="80px" src="https://aevengroup.jobs.cz/assets/components/share-icons/images/logo-share-1200x630.png?av=7507700ea655e5f7"></img>
                        <h3 className={styles.headerTitle}></h3>
                    </Link>
                    <nav>
                    </nav>
                    <h4 className={styles.headerRightText}>Seller support</h4>
                </div>
            </header>

            <Outlet />
        </div>
    );
};

export default Layout;

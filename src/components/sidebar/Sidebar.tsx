import AppNav from "../appNav/AppNav";
import Footer from "../footer/Footer";
import Logo from "../logo/Logo";
import styles from "./Sidebar.module.css";

const Sidebar: () => JSX.Element = () => {
    return (
        <div className={styles.sidebar}>
            <Logo />
            <AppNav />

            <p>List of cities</p>
            
            <Footer />
        </div>
    )
}

export default Sidebar;
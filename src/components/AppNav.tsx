import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";

const AppNav: () => JSX.Element = () => {
    return <>
        <nav className={styles.nav}>
            <ul>
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
            </ul>
        </nav>
    </>
}

export default AppNav;
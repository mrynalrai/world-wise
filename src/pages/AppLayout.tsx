import Sidebar from "../components/sidebar/Sidebar";
import Map from "../components/map/Map";
import styles from "./AppLayout.module.css";

const AppLayout: () => JSX.Element = () => {
    return (
        <div className={styles.app}>
            <Sidebar />
            <Map />
        </div>
    )
}

export default AppLayout;
import { ROUTES_URLS } from "../../constants";
import styles from "./Navigate.module.css";
import { Link } from "react-router-dom";

export const Navigate = () => (
     <div className={styles.container}>
          <div className={styles.logo}>
               <Link to={ROUTES_URLS.HOME}>
                    Herolo Weather Task
               </Link>
          </div>
          <div className={styles.links}>
               <Link to={ROUTES_URLS.HOME} className={styles.link}>
                    Home
               </Link>
               <Link to={ROUTES_URLS.FAVORITES} className={styles.link}>
                    Favorites
               </Link>
          </div>
     </div>
);
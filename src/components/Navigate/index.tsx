import styles from "./Navigate.module.css";
import { Link } from "react-router-dom";

export const Navigate = () => {
     return (
          <div className={styles.container}>
               <div className={styles.logo}>Herolo Weather Task</div>
               <div className={styles.links}>
                    <Link to={'/'} className={styles.link}>
                         Home
                    </Link>
                    <Link to={'/favorites'} className={styles.link}>
                         Favorites
                    </Link>
               </div>
          </div>
     );
};

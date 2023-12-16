import { Navigate } from "..";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import useDarkMode from "../../hooks/useDarkMode";
import styles from './Layout.module.css'
interface LayoutProps {
     children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
     const { changeMode, isDark } = useDarkMode();
     return (
          <div>
               <Navigate />
               <div onClick={changeMode} className={styles.darkMode}>
                    {isDark ? <MdDarkMode size={50} color="black" /> : <MdOutlineDarkMode size={50} color="black" />}
               </div>
               <div>{children}</div>
          </div>
     );
};

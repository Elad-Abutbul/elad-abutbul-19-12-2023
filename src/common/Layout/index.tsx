import { Navigate } from "..";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import useDarkMode from "../../hooks/useDarkMode";

interface LayoutProps {
     children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
     const { changeMode, isDark } = useDarkMode();
     return (
          <div>
               <Navigate />
               <div onClick={changeMode}>
                    {isDark ? <MdDarkMode size={50} color="black" /> : <MdOutlineDarkMode size={50} color="black" />}
               </div>
               <div>{children}</div>
          </div>
     );
};

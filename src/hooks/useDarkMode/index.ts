import { useEffect, useState } from "react";
import { localSorageService } from "../../services";
import { DARK_MODE } from "../../constants";

const useDarkMode = () => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const applyTheme = (theme: string) => {
    document.querySelector("body")?.setAttribute("data-theme", theme);
    localSorageService.setItem(DARK_MODE.THEME, theme);
  };

  const changeMode = () => {
    setIsDark(!isDark);
    const newTheme = isDark ? DARK_MODE.LIGHT : DARK_MODE.DARK;
    applyTheme(newTheme);
  };

  useEffect(() => {
    const storedTheme = localSorageService.getItem(DARK_MODE.THEME);
    setIsDark(storedTheme === DARK_MODE.DARK);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading) {
      applyTheme(isDark ? DARK_MODE.DARK : DARK_MODE.LIGHT);
    }
  }, [loading]);

  return { changeMode, isDark };
};

export default useDarkMode;

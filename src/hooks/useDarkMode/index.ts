import { useEffect, useState } from "react";
import { localSorageService } from "../../services";

const useDarkMode = () => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const applyTheme = (theme: string) => {
    document.querySelector("body")?.setAttribute("data-theme", theme);
    localSorageService.setItem("theme", theme);
  };

  const changeMode = () => {
    setIsDark(!isDark);
    const newTheme = isDark ? "light" : "dark";
    applyTheme(newTheme);
  };

  useEffect(() => {
    const storedTheme = localSorageService.getItem("theme");
    setIsDark(storedTheme === "dark");
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading) {
      applyTheme(isDark ? "dark" : "light");
    }
  }, [loading]);

  return { changeMode, isDark };
};

export default useDarkMode;

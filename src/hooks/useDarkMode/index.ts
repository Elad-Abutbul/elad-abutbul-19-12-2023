import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [isDark, setIsDark] = useState(false);
  const [loading, setLoading] = useState(true);

  const applyTheme = (theme: string) => {
    document.querySelector("body")?.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  const changeMode = () => {
    setIsDark(!isDark);
    const newTheme = isDark ? "light" : "dark";
    applyTheme(newTheme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
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

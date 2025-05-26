import { useState, useEffect } from "react";

export default function useDarkmode() {
  const [theme, setTheme] = useState(() => {
    const saved = window.localStorage.getItem("theme");
    return saved ? saved : "light";
  });

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const isDarkMode = theme === "dark";

  return [isDarkMode, toggleTheme];
}

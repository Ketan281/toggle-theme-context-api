import React, { createContext, useEffect, useState } from "react";


export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    localStorage.setItem("isDark", JSON.stringify(!isDark));
    setIsDark(!isDark);
  };
  useEffect(() => {
    const isDark = localStorage.getItem("isDark") === "true";
    setIsDark(isDark);
  }, []);
  return (
    <ThemeContext.Provider value={[{ isDark }, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
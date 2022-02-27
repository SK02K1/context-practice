import { createContext, useContext, useState } from "react";
import { themes } from "../data/themes";

const ThemeContext = createContext(themes.light);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const updateTheme = (newTheme) => setTheme(newTheme);
  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };

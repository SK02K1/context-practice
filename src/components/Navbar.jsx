import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../contexts/theme-context";

export const Navbar = () => {
  const { theme, updateTheme } = useTheme();
  return (
    <nav className="navbar box">
      <div className="logo">Sabzi wala</div>
      <div className="nav-controls">
        {theme === "dark" ? (
          <FiSun onClick={() => updateTheme("light")} />
        ) : (
          <FiMoon onClick={() => updateTheme("dark")} />
        )}
      </div>
    </nav>
  );
};

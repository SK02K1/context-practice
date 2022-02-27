import { FiSun, FiMoon } from "react-icons/fi";

export const Navbar = () => {
  return (
    <nav className="navbar box">
      <div className="logo">Sabzi wala</div>
      <div className="nav-controls">
        <FiSun />
        <FiMoon />
      </div>
    </nav>
  );
};

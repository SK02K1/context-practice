import { Cart } from "./components/Cart";
import { Navbar } from "./components/Navbar";
import { Products } from "./components/Products";
import { useTheme } from "./contexts/theme-context";
import { themes } from "./data/themes";
import "./styles.css";

export default function App() {
  const { theme } = useTheme();
  return (
    <div className="App" style={themes[theme]}>
      <h1>Context Practice</h1>
      <Navbar />
      <Cart />
      <Products />
    </div>
  );
}

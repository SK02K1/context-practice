import { Cart } from "./components/Cart";
import { Navbar } from "./components/Navbar";
import { Products } from "./components/Products";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Context Practice</h1>
      <Navbar />
      <Cart />
      <Products />
    </div>
  );
}

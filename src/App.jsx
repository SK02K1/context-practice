import { Cart } from "./components/Cart";
import { Products } from "./components/Products";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Context Practice</h1>
      <Cart />
      <Products />
    </div>
  );
}

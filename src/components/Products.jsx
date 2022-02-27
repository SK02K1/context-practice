import { useCart } from "../contexts/cart-context";
import { groceryItems } from "../data/grocery-items";

export const Products = () => {
  const { addToCart } = useCart();
  return (
    <div className="products box">
      <h2>Products</h2>
      <ul className="list">
        {groceryItems.map(({ id, name, icon }) => {
          return (
            <li className="list-item box" key={id}>
              <div>
                <span className="icon">{icon}</span>
                <span>{name}</span>
              </div>
              <button onClick={addToCart} className="btn">
                add to cart
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

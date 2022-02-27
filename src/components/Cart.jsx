import { useCart } from "../contexts/cart-context";

export const Cart = () => {
  const { items } = useCart();
  return (
    <div className="cart box">
      <h2>Cart</h2>
      <p>
        no. of items in cart:{" "}
        <span style={{ color: "limegreen" }}>{items}</span>{" "}
      </p>
    </div>
  );
};

import { createContext, useContext, useState } from "react";

const CartContext = createContext({ items: 0, addToCart: () => {} });

const CartProvider = ({ children }) => {
  const [items, setItems] = useState(0);
  const addToCart = () => {
    setItems((prevItems) => prevItems + 1);
  };
  return (
    <CartContext.Provider value={{ items, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };

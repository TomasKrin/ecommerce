import { createContext, useState } from "react";
const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);
  const handleAddToCart = (cartItem) => {
    //{...item, quantity:1}
    const hasEqualId = (cItem) => cItem.id === cartItem.id;

    const alreadyInCartItem = cartItems.find(hasEqualId);

    if (alreadyInCartItem) {
      //paupdatint quantity n+1
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          hasEqualId(item) ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      const item = { ...cartItem, quantity: 1 };
      setCartItems((prevCartItems) => [...prevCartItems, item]);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, handleAddToCart }}>{children}</CartContext.Provider>
  );
};
export { CartContext, CartProvider };

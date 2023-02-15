import { createContext } from "react";
import { useLocalStorage } from "../hooks/localStorage";

const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage("cartItems", []);
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

  const resetCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ resetCart, cartItems, handleAddToCart }}>
      {children}
    </CartContext.Provider>
  );
};
export { CartContext, CartProvider };

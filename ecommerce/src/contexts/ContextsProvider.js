import { UserProvider } from "./UserContext";
import { CartProvider } from "./CartContext";
const ContextsProvider = ({ children }) => {
  return (
    <UserProvider>
      <CartProvider>{children}</CartProvider>
    </UserProvider>
  );
};

export default ContextsProvider;

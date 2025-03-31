import { createContext, useState, useContext } from "react";
import { cart } from "../../data/data";

interface CartContextType {
  isExpanded: boolean;
  toggleCart: () => void;
  cartItems: typeof cart;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCart = () => setIsExpanded(!isExpanded);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        isExpanded,
        toggleCart,
        cartItems: cart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};

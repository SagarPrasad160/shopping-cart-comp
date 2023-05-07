import { createContext, useState } from "react";

const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeItemFromCart = (itemToRemove) => {
    setCartItems(cartItems.filter((item) => item.id !== itemToRemove.id));
  };

  return (
    <cartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default cartContext;

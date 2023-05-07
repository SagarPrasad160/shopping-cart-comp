import { createContext, useState } from "react";

const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    console.log(item);
    setCartItems([...cartItems, item]);
  };

  return (
    <cartContext.Provider
      value={{
        cartItems,
        addItemToCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default cartContext;

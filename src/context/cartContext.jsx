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

  const updateItemInCart = (itemToUpdate, qty) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === itemToUpdate.id && qty >= 1) {
        return {
          ...item,
          qty,
        };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  return (
    <cartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        updateItemInCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default cartContext;

import { useContext } from "react";

import cartContext from "../context/cartContext";

function Cart() {
  const { cartItems } = useContext(cartContext);

  if (cartItems.length === 0) {
    return (
      <h1>
        Items you add in the cart will show up here,No Items in the display yet.
      </h1>
    );
  }

  return (
    <div>
      {cartItems.map((apparel) => (
        <h1 key={apparel.id}>{apparel.name}</h1>
      ))}
    </div>
  );
}

export default Cart;

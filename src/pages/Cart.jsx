import { useContext, useState, useEffect } from "react";

import cartContext from "../context/cartContext";

import CartItem from "../components/CartItem";

import { toast } from "react-toastify";

function Cart() {
  const { cartItems } = useContext(cartContext);

  const [cartTotal, setCartTotal] = useState(
    cartItems.reduce((acc, curr) => {
      return acc + curr.price;
    }, 0)
  );
  useEffect(() => {
    setCartTotal(
      cartItems.reduce((acc, curr) => {
        return acc + curr.price;
      }, 0)
    );
  }, [cartItems]);

  const handleCartTotal = (action, Item) => {
    if (action === "remove") {
      setCartTotal(cartTotal - Item.price);
    } else if (action === "add") {
      setCartTotal(cartTotal + Item.price);
    }
  };

  if (cartItems.length === 0) {
    return (
      <h1>
        Items you add in the cart will show up here,No Items in the display yet.
      </h1>
    );
  }

  return (
    <div className="flex">
      <div>
        {cartItems.map((apparel) => (
          <CartItem
            key={apparel.id}
            apparel={apparel}
            handleCartTotal={handleCartTotal}
          />
        ))}
      </div>
      <div className="w-1/2">
        <div className="card w-96  border fixed">
          <div className="card-body items-center text-center">
            <h2 className="card-title  text-2xl">Total</h2>
            <p className="font-bold text-xl">${cartTotal}</p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() => toast.success("Order Placed")}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

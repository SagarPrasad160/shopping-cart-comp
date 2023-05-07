import { useState, useContext } from "react";
import { GoTrashcan, GoPlus, GoDash } from "react-icons/go";

import cartContext from "../context/cartContext";

function CartItem({ apparel, handleCartTotal }) {
  const [qty, setQty] = useState(1);

  const { removeItemFromCart, updateItemInCart } = useContext(cartContext);

  const handleClick = (action) => {
    if (qty >= 1) {
      if (action === "inc") {
        setQty(qty + 1);
        handleCartTotal("add", apparel);
        updateItemInCart(apparel, qty + 1);
      } else if (action === "dec") {
        setQty(qty - 1);
        handleCartTotal("remove", apparel);
        updateItemInCart(apparel, qty - 1);
      }
    }
  };

  const handleDelete = (item) => {
    removeItemFromCart(item);
  };

  return (
    <div className="flex w-1/2 h-fit border shadow p-4">
      <div className="p-4">
        <img src={apparel.imageSrc} alt="apparel" />
      </div>
      <div className="flex flex-col justify-between ml-4">
        <div>
          <h1 className="text-xl font-bold mb-2">{apparel.name}</h1>
          <p className="text-gray-600">{apparel.description}</p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="text-gray-500 hover:text-red-500"
            onClick={() => handleDelete(apparel)}
          >
            <GoTrashcan />
          </button>
          <div className="flex">
            <button
              className="p-1 border  text-lg"
              onClick={() => handleClick("inc")}
            >
              <GoPlus />
            </button>
            <span className="py-1 px-2 border font-bold">
              {apparel.qty ? apparel.qty : 1}
            </span>
            <button
              className={`p-1 border text-lg ${
                qty === 1 ? "hidden" : undefined
              }`}
              onClick={() => handleClick("dec")}
              disabled={qty === 1}
            >
              <GoDash />
            </button>
          </div>
          <p className="text-xl font-bold">${apparel.price * qty}</p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

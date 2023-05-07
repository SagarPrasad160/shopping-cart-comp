import { useContext } from "react";

import cartContext from "../context/cartContext";

import { toast } from "react-toastify";

function ApparelListItem({ apparel }) {
  const { addItemToCart, cartItems } = useContext(cartContext);

  const handleAdd = (apparel) => {
    const itemExists = cartItems.find((item) => item.id === apparel.id);
    if (itemExists) {
      toast.error("Item is already in cart");
    } else {
      addItemToCart(apparel);
      toast.success("Item added to Cart");
    }
  };

  return (
    <div className="card card-compact h-96 w-64 bg-base-100 shadow-xl m-2 p-4 apparel-list-item">
      <figure>
        <img src={apparel.imageSrc} alt="apparel" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {apparel.name} - ${apparel.price}
        </h2>
        <p>{apparel.description}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={() => handleAdd(apparel)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ApparelListItem;

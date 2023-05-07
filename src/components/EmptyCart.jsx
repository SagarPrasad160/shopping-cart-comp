import React from "react";
import { Link } from "react-router-dom";
function EmptyCart() {
  return (
    <div className="hero min-h-screen bg-blue-300">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Your Cart is Empty</h1>
          <p className="py-6">Please add some items from the home menu.</p>
          <button className="btn btn-primary">
            <Link to="/">Back to Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmptyCart;

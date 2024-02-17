import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <>
      {cartItems.map((item, index) => (
        <div className="product-added" key={index}>
          <h3>{item.productName}</h3>
          <span>{item.productPrice}</span>
          <p>{item.items}</p>
          <button>+</button>
          <button>-</button>
        </div>
      ))}
    </>
  );
};

export default Cart;

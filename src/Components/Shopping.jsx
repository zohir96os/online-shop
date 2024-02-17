import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Store/store";

const Shopping = () => {
  const dispatch = useDispatch();

  let handleAddToCart = (productName, productPrice) => {
    const item = {
      productName: productName,
      productPrice: productPrice,
    };
    dispatch(addToCart(item));
  };
  return (
    <div>
      <div className="container">
        <div className="products">
          <div className="product">
            <h3 className="product-name">MacBook Pro</h3>
            <img
              className="product-image"
              src="../../src/assets/71vFKBpKakL._AC_UF894,1000_QL80_.jpg"
            />
            <span className="price">120$</span>
            <button
              className="add-to-cart"
              onClick={() => handleAddToCart("MacBook Pro", "120$")}
            >
              Add to cart
            </button>
          </div>
          <div className="product">
            <h3 className="product-name">Iphone 15 pro max</h3>
            <img className="product-image" src="../../src/assets/iphone.jpg" />
            <span className="price">1999$</span>
            <button
              className="add-to-cart"
              onClick={() => handleAddToCart("Iphone 15 pro max", "1999$")}
            >
              Add to cart
            </button>
          </div>
          <div className="product">
            <h3 className="product-name">Samsung S24 Ultra</h3>
            <img
              className="product-image"
              src="../../src/assets/samsung.jpeg"
            />
            <span className="price">989$</span>
            <button
              className="add-to-cart"
              onClick={() => handleAddToCart("Samsung S24 Ultra", "989$")}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopping;

import React, { useContext, useEffect } from "react";
import { FaTrash } from "react-icons/fa"; // For the delete icon
import "./CartCard.css";
import { AppContext } from "../context/AppContext";

const CartCard = ({ product }) => {
  const { cartProducts, setCartProducts } = useContext(AppContext);

  // Delete handler
  const deleteHandler = () => {
    const newArray = cartProducts.filter(
      (ele) => !(ele.id === product.id && ele.size === product.size)
    );
    setCartProducts(newArray);
  };

  // Quantity handler
  const quantityHandler = (event) => {
    const updatedProducts = cartProducts.map((ele) => {
      if (ele.id === product.id && ele.size === product.size) {
        return { ...ele, quantity: event.target.value }; // Update quantity
      }
      return ele;
    });
    setCartProducts(updatedProducts);
  };

  // Debugging cartProducts whenever they change
  useEffect(() => {
    console.log(cartProducts);
  }, [cartProducts]);

  return (
    <div className="cart-card">
      <div className="cart-card-image">
        <img src={product.image} alt="Product" />
      </div>
      <div className="cart-card-details">
        <div className="cart-card-name">{product.name}</div>
        <div className="cart-card-price">₹{product.price}</div>
        <div className="cart-card-size">{product.size}</div>
      </div>
      <div className="cart-card-quantity">
        {/* Use value instead of defaultValue */}
        <input
          type="number"
          value={product.quantity} // Dynamically bind the quantity from the product
          onChange={quantityHandler}
          min="1"
        />
      </div>
      <div className="cart-card-delete" onClick={deleteHandler}>
        <FaTrash />
      </div>
    </div>
  );
};

export default CartCard;

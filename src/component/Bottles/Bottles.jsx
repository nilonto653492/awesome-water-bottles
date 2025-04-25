/* eslint-disable no-undef */
import React, { use, useEffect, useState } from "react";

import Bottle from "../bottle/bottle";
import "./bottles.css";
import { addToStoredCart, getStoreCart, removeFromCart } from "../../local-storage";
import Cart from "../cart/cart";
const Bottles = ({ bottlesPromise }) => {
  const [cart, setCart] = useState([]);
  const bottles = use(bottlesPromise);
  console.log(bottles);

  // useEffect
  useEffect(() => {
    const storedCartIds = getStoreCart();
    // console.log(storedCartIds, bottles);

    const storedCart = [];

    for (const id of storedCartIds) {
      // console.log(id);
      const cartBottle = bottles.find((bottle) => bottle.id === id);
      if (cartBottle) {
        storedCart.push(cartBottle);
      }
    }

    setCart(storedCart);
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    console.log("Bottle will be added to the cart", bottle);
    const newCart = [...cart, bottle];
    setCart(newCart);

    addToStoredCart(bottle.id);
  };
  const handleRemoveFromCart = id => {
    console.log("remove", id);

    const remainingCart = cart.filter(bottle => bottle.id !== id);
    setCart(remainingCart);
    removeFromCart(id);
  }
  return (
    <div>
      <h3>bottles:{bottles.length}</h3>
      <p>Added to cart:{cart.length}</p>
      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      <div className="bottle-container">
        {bottles.map((bottle) => (
          <Bottle
            handleAddToCart={handleAddToCart}
            key={bottle.id}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;

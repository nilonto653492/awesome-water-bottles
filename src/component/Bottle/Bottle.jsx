import React from "react";
import './bottle.css'
const Bottle = ({ bottle,handleAddToCart }) => {
    const {img,name,price, stock}=bottle;
  return (
    <div className="card bottle-size">
      <img src={img} alt="" />

             <h3>{name}</h3> 
            <p>${price}</p> 
          <p>Available:{stock} </p> 

          <button onClick={() =>handleAddToCart(bottle)}>Buy now</button>
    </div>
  );
};

export default Bottle;

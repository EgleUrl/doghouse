import React, { useState } from "react";
import { Button } from 'react-bootstrap'

const ProductDisplay = ({ item }) => {
  const { id, img1, imgAlt, price, name, quantity, seller, description, ratingsCount} = item;
  const [prequantity, setQuantity] = useState(quantity);  

  const handleDecrease = () => {
    if (prequantity > 1) {
      setQuantity(prequantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(prequantity + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object representing the product to be added to the cart
    const product = {
      id: id,
      img: img1,
      imgAlt: imgAlt,
      name: name,
      price: price, 
      quantity: prequantity,      
    };

    // Retrieve existing cart items from local storage or initialize an empty array
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product with the same ID is already in the cart
    const existingProductIndex = existingCart.findIndex((item) => item.id === id);

    if (existingProductIndex !== -1) {
      // Product already in the cart; update quantity
      existingCart[existingProductIndex].quantity += prequantity;
    } else {
      // Product not in the cart; add it
      existingCart.push(product);
    }

    // Update the local storage with the updated cart items
    localStorage.setItem("cart", JSON.stringify(existingCart));

    // Reset form fields and quantity
    setQuantity(1); 
    
  };

  return (
    <div>
      <div>
        <h4>{name}</h4>
        <div className="row align-items-center">
          <p className="stars d-inline-flex">
            <i className="fa fa-star p-1"></i>
            <i className="fa fa-star p-1"></i>
            <i className="fa fa-star p-1"></i>
            <i className="fa fa-star p-1"></i>
            <i className="fa fa-star-half p-1"></i>
            ({ratingsCount})
        </p>
        </div>
        <h4>£{price}</h4>
        <h6>{seller}</h6>
        <p>{description}</p>
      </div>
      {/* Single Product Cart Component here */}
      <div>
      <form onSubmit={handleSubmit}>
      
      <div className="justify-content-center align-items-center d-inline-flex m-1">
        <div className="qtybutton me-2" onClick={handleIncrease}>
          <i className="fa fa-plus-square"></i>
        </div>        
        <input
          className="form-control"
          type="text"
          name="qtyinput"
          value={prequantity}
          onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
        />
        <div onClick={handleDecrease} className="qtybutton mx-2">
          <i className="fa fa-minus-square"></i>
        </div>        
      </div>
      <div className="row justify-content-between gap-1 p-2">          
        <Button variant="outline-dark" size='lg' type="submit">Add to Cart</Button>      
        <Button id="butt" variant="outline-dark" size='lg' href='/doghouse/cart'>Check Out</Button>        
      </div> 
    </form>
      </div>
    </div>
  );
};
export default ProductDisplay

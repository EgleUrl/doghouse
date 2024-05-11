import React, { useEffect, useState } from "react";
import PageHeader from "../../components/pageHeader";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap'
import delImgUrl from "../../assets/images/del.png";
import Table from 'react-bootstrap/Table';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [shippingType, setShippingType] = useState('Standard');
  const [couponCode, setCouponCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);  
  const [cartOrderTotal, setCartOrderTotal] = useState(0);
  const [roundedOrderTotal, setRoundedOrderTotal] = useState(0);

  useEffect(() => {
    // Fetch cart items from local storage
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
  }, []);

  // Calculate the total price for each item in the cart
  const calculateTotalPrice = (item) => {
    // Calculate the total price and round it to two decimal places
    return (item.price * item.quantity).toFixed(2);
  };

  // Recalculate the cart order total whenever the cart items change
  useEffect(() => {
    const total = cartItems.reduce((acc, item) => {
      return acc + (item.price * item.quantity);
    }, 0);
    setCartOrderTotal(total);
  }, [cartItems]);

  // Update roundedOrderTotal whenever cartOrderTotal changes
  useEffect(() => {
    setRoundedOrderTotal(cartOrderTotal.toFixed(2));
  }, [cartOrderTotal]);


  // Handle quantity increase
  const handleIncrease = (item) => {
    item.quantity += 1;
    setCartItems([...cartItems]);
    // Update local storage with the new cart items
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  // Handle quantity decrease
  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setCartItems([...cartItems]);

      // Update local storage with the new cart items
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  };

  // Handle item removal
  const handleRemoveItem = (item) => {
    // Filter out the item to be removed
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    // Update the state with the new cart
    setCartItems(updatedCart);
    // Update local storage with the updated cart
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleCouponChange = (event) => {
    setCouponCode(event.target.value);
  };

  const handleApplyCoupon = (event) => {
    event.preventDefault(); // Prevent form submission
    if (couponCode === '2024Xpet') {
      setDiscountApplied(true); // Set discount applied flag to true
      alert('Coupon code is valid');
    } else {      
      alert('Coupon code is not valid');
    }
  };

  const handleUpdateCart = (event) => {
    event.preventDefault(); // Prevent form submission
    if (discountApplied) {
      const discountedTotal = cartOrderTotal * 0.9; // 10% discount
      setRoundedOrderTotal(discountedTotal.toFixed(2));
    }
  };

  const handleShippingChange = (event) => {
    setShippingType(event.target.value);
  };

  const handleUpdateTotal = () => {
    let updatedOrderTotal = cartOrderTotal; // Assuming orderTotal is calculated elsewhere
    if (shippingType === 'Next day') {
      updatedOrderTotal += 5.99; // Add £5.99 for next day shipping
    }
    const updatedRoundedOrderTotal = updatedOrderTotal.toFixed(2);
    setRoundedOrderTotal(updatedRoundedOrderTotal);
  };

  const handleBuy = () => {
    alert("Thank you for buying at our store!");
    const emptyCart = [];
    setCartItems(emptyCart);    
    // Update local by clearing all the previous items
    localStorage.clear();
  };

  return (
    <div>
      <PageHeader title={"Shop Cart"} curPage={"Cart"} />
      <div className="padding-tb">
        <div className="main container-fluid">
          <div className="row map-area">
            {/* cart top */}
            <div className="shop-cart justify-content-center align-items-center d-flex mt-4 text-center">
              <Table responsive="lg">
                <thead>
                  <tr>
                    <th className="cat-product">Product</th>
                    <th className="cat-price">Price</th>
                    <th className="cat-quantity">Quantity</th>
                    <th className="cat-toprice">Total</th>
                    <th className="cat-edit">Delete</th>            
                  </tr>
                </thead>
                <tbody>                
                {cartItems.map((item, indx) => (
                  <tr key={indx}>
                    <td className="product-item cat-product">
                      <div className="tableimg">
                        <Link to={`/doghouse/shop/${item.id}`}>
                          <img style={{width: "10vh", height: "7vh"}} src={`${item.img}`} alt={item.imgAlt} />
                        </Link>
                      </div>
                      <div className="p-content">
                        <Link className="link" to={`/doghouse/shop/${item.id}`}>{item.name}</Link>
                      </div>
                    </td>
                    <td >£{item.price}</td>
                    <td>
                      <div className="align-items-center d-inline-flex">
                        <div className="qtybutton" onClick={() => handleIncrease(item)}>
                          <i class="fa fa-plus-square"></i>
                        </div>                          
                        <input
                          className="cart-plus-minus-box text-center rounded"
                          type="text"
                          name="qtybutton"
                          value={item.quantity}
                          />
                          <div className="qtybutton" onClick={() => handleDecrease(item)}>
                            <i class="fa fa-minus-square"></i>
                          </div>
                      </div>
                    </td>
                    <td className="cat-toprice">
                      £{calculateTotalPrice(item)}
                    </td>
                    <td className="cat-edit">
                      <a href="#" onClick={() => handleRemoveItem(item)}>
                        <img style={{width: "3vh", height: "auto"}} src={delImgUrl} alt="Bin icon" />
                      </a>
                    </td>
                  </tr>
                  ))}
                </tbody>          
            </Table>
                    
            </div>

            {/* cart bottom */}
            <div className="cart-bottom">
            {/* Checkout box */}
              <div className="cart-checkout-box mt-2">
                {/* Coupon form */}
                <form >
                  <input
                    type="text"
                    name="coupon"
                    placeholder="Coupon Code..."
                    value={couponCode}
                    onChange={handleCouponChange}
                    className="form-control"
                    style={{width: "35vh"}}
                  />                  
                </form>
                <Button className="mt-2 mx-1" type="submit" variant="outline-dark" onClick={handleApplyCoupon}>Apply Coupon</Button>
                {/* Cart checkout form */}
                <Button className="mt-2" id="butt" type="submit" variant="outline-dark" onClick={handleUpdateCart}>
                      Update Cart
                  {/* Proceed to checkout button */}            
                </Button>
              </div>   

              {/* shopping box */}
              <div className="shiping-box">
                <div className="row">
                  {/* shipping  */}
                  <div className="col-lg-6 col-12">
                    <div className="calculate-shiping mt-4 ">
                      <h3>Select Shipping</h3>
                      <div className="outline-select">
                        <select className="form-select form-select-lg mb-4 mt-2" style={{width: "32vh"}}  aria-label="Select shipping" value={shippingType} onChange={handleShippingChange}>                        
                          <option value="Standard">Standard shipping £0</option>
                          <option value="Next day">Next day shipping £5.99</option>                          
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>                      
                      <Button className="mb-4" id="butt" variant="outline-dark" type="submit" onClick={handleUpdateTotal} >Update Total</Button>
                    </div>
                  </div>

                  {/* cart total */}
                  <div className="col-md-6 col-12">
                    <div className="cart-overview">
                      <h3>Cart Totals</h3>
                      <ul className="lab-ul">
                        <li>
                          <span className="pull-left">Cart Subtotal</span>
                          <p className="pull-right">£ {cartOrderTotal}</p>
                        </li>
                        <li>
                          <span className="pull-left">
                            Shipping 
                          </span>
                          <p className="pull-right">{shippingType}</p>
                        </li>
                        <li>
                          <span className="pull-left">Order Total</span>
                          <p className="pull-right">
                            £ {roundedOrderTotal}
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-4 mb-4">
                      <Button id="butt" variant="outline-dark" href="/doghouse/" onClick={handleBuy}>Buy</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartPage;

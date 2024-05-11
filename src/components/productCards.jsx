import React from 'react';
import { Link } from 'react-router-dom';

const ProductCards = ({ products }) => {
  return (
    <div className="row">
      {products.map((product, i) => (
        <div className="map-area col-lg-4 col-md-6 col-sm-12 mb-4" key={i}>
          <div className="card">
            <img className="card-img-top" src={product.img1} alt={product.imgAlt} />
            <div className="card-body">
              <h5 className="card-title">
                <Link to={`/doghouse/shop/${product.id}`} className="link">{product.name}</Link>
              </h5>
              <h4 className="card-text">£{product.price}</h4>
              <p className="card-text">Seller: {product.seller}</p>
              <div className="row d-flex align-items-center justify-content-center gap-1">
                <Link to={`/doghouse/shop/${product.id}`} className="btn btn-outline-dark" id="butt" style={{width: "10vh"}} >
                  <i className="fa fa-info-circle"></i>
                </Link>
                <Link to="/doghouse/cart" className="btn btn-outline-dark" style={{width: "10vh"}}>
                  <i className="fa fa-cart-plus fa-md"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ProductCards;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Search = ({ products}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="mt-4">
      <form className="input-group input-group-lg mb-3" id="formId">
        <input
          type="text"
          name="s"
          placeholder="Search..."
          className="form-control"
          defaultValue={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span className="input-group-text" style={{ cursor: "pointer" }} onClick={() => document.getElementById("formId").submit()}>
          <i className="fa fa-search"></i>
        </span>        
      </form>

      <div>
        {searchTerm && filteredProducts.map((product) => (
          <Link className="link" key={product.id} to={`/doghouse/shop/${product.id}`}>
            <div className="d-flex gap-3 p-2">
            <div>
              <div className="pro-thumb h-25">
                <img src={`${product.img1}`} alt={`${product.imgAlt}`} width={70} className="flex-{grow|shrink}-0"/>
              </div>
            </div>
            <div className="product-content">
              <p>
                <Link className="link" to={`/doghouse/shop/${product.id}`}>{product.name}</Link>
              </p>
              <h6>£{product.price}</h6>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Search
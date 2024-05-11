import React, {useState} from 'react'
import PageHeader from '../../components/pageHeader'
import Search from "../../components/search";
import CustomPagination from "../../components/pagination";
import ProductCategory from "../../components/productCategory";
import ProductCards from "../../components/productCards";
const showResult = "Showing 1 - 9";
import Data from "../../products.json"

const Shop = () => {  
  const [products, setProducts] = useState(Data);

  //   category active colors
  const [selectedCategory, setSelectedCategory] = useState("All");

  // pagination
  // Get current products to display
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9; // Number of products per page

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Function to change the current page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Data is an array of objects with properties category1 and category2
const menuItems = [...new Set([...Data.map((val) => val.category1), ...Data.map((val) => val.category2)])];

// category based filtering using category1 and category2
const filterItem = (curcat) => {
  const newItem = Data.filter((newVal) => {
    return newVal.category1 === curcat || newVal.category2 === curcat;
  });
  setSelectedCategory(curcat); 
  setProducts(newItem);
  // console.log(selectedCategory)
};

  return (
    <div>      
      <PageHeader title={'Our Store'} curPage={'Shop'} />
        <div className='main container-fluid'>
          <div className='row justify-content-center'>            
            <div className='col-lg-4 col-12 mt-4 mb-3'>
              <aside>
                <Search products={products} />
                {/* <ShopCategory /> */}
                <ProductCategory
                  filterItem={filterItem}
                  
                  menuItems={menuItems}
                  setProducts={setProducts}
                  selectedCategory={selectedCategory }
                />                
              </aside> 
            </div>
            <div className='col-lg-8 col-12 mt-4 mb-3'>
            <article>
                <div className="shop-title d-flex flex-wrap justify-content-between">
                  <h5>{showResult}</h5>                  
                </div>
                <div>
                  <ProductCards
                    products={currentProducts}                    
                  />
                </div>
                <div className='d-flex justify-content-center text-center'>
                  <CustomPagination
                    productsPerPage={productsPerPage}
                    totalProducts={products.length}
                    paginate={paginate}
                    activePage={currentPage}
                  />
                </div>
              </article> 
            </div>
          </div>
        </div>  
  </div>
  )
}
export default Shop
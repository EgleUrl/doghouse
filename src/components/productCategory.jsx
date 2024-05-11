import React from 'react';
import { Button } from 'react-bootstrap';
import Data from "../../src/products.json";

const title = "All Categories";
const customSuccessColor = "#96BA33"; // Custom success color

const ProductCategory = ({ filterItem, menuItems, setProducts, selectedCategory }) => {
  // Filter out null, undefined, and empty values from menuItems
    const filteredMenuItems = menuItems.filter(item => item && item.trim() !== '');

    return (
        <>
            <div className="button-header">
                <h5 className="ms-2">{title}</h5>
            </div>
            <div className="mt-2">
                <Button
                    variant='outline-dark'
                    className={`m-2 ${selectedCategory === 'All' ? customSuccessColor : ''}`}
                    style={{ backgroundColor: selectedCategory === 'All' ? customSuccessColor : '' }} // Apply custom color
                    onClick={() => {
                    filterItem('All'); // Filter by "All" category
                    setProducts(Data); // Set products to all data
                    }}>
                    All
                </Button>
                {filteredMenuItems.map((Val, id) => (
                    <Button
                        key={id}
                        variant='outline-dark'
                        className={`m-2 ${selectedCategory === Val ? customSuccessColor : ''}`}
                        style={{ backgroundColor: selectedCategory === Val ? customSuccessColor : '' }} 
                        onClick={() => filterItem(Val)}>
                            {Val}
                    </Button>
                    ))}
            </div>
    </>
  );
};

export default ProductCategory;

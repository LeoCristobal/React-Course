import React from "react";

const Product = ({ product, price }) => {
    return (
        <>
            <h2>Product: {product}</h2>
            <p>Price: ₱{price}</p>
        </>
    );
};

export default Product;

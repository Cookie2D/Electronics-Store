import React, {useContext, useEffect, useState} from 'react';
import {ProductContext} from './ProductContext';

const Product = () => {
    const {product} = useContext(ProductContext);


    return (
        <div>
            КАРТКА ПРОДУКТУ
            {product.title}
            {product.name}
            {product.amount}
            {product.price}     і тому подібне
        </div>
    );
};

export default Product;
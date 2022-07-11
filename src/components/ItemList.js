import React from "react";
import Item from "./Item.js";

const ItemList = ({arrayOfProducts}) => {
    return (
        arrayOfProducts.map( product => <Item key={product.id} prenda={product} /> )
    );
} 

export default ItemList;
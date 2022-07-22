import React from "react";
import Item from "./Item.jsx";
import { Link } from 'react-router-dom'

const ItemList = ({arrayOfProducts}) => {
    return (
        arrayOfProducts.map( product => {
            return( 
                <Link to={ `/item/${product.id}` } key={product.id}>
                    <Item prenda={product} />
                </Link>
                )
            })
        );
    } 

export default ItemList;
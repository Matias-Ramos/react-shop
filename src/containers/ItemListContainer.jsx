import React, {useState} from "react";
import ItemList from "../components/ItemList";
import stock from "../data/stock.json";

const ItemListContainer = () =>
{  
    //state-variable declaration
    const [arrayOfProducts , setProductsList] = useState([]);

    //promise
    const promise = new Promise ( (resolve, reject) => {
        setTimeout( () => resolve(stock), 2000);
    } )

    //promise assignment to state-variable
    promise.then( (dataFromPromise) => {
        setProductsList(dataFromPromise);
    } );

    return(
        <ItemList arrayOfProducts={arrayOfProducts}/>
    );
}
export default ItemListContainer;


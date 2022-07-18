import ItemDetail from "../components/ItemDetail";
import {useState} from "react";
import stock from "../data/stock.json";
import Loading from "../components/Loading";

const ItemDetailContainer = () => {
    //state-variable declaration
    const [product, setProductObject] = useState();


    //promise
    const promise = new Promise ( (resolve,reject) => {
        setTimeout( () => resolve(stock[1]), 2000 )
    })

    //promise assignment to state-variable
    promise.then( (datafromPromise) => 
    {
        setProductObject(datafromPromise)
    } )


    return ( 
        product ? 
        
        <ItemDetail 
         id={product}
         color={product.color}
         title={product.title}
         imgURL={product.imgURL}
         price={product.price}
         stock={product.stock}/>
        
         : <Loading />
        );
}
export default ItemDetailContainer;
import ItemDetail from "../components/ItemDetail";
import {useState} from "react";
import stock from "../data/stock.json";

const ItemDetailContainer = () => {
    //state-variable declaration
    const [product, setProductObject] = useState();


    //promise
    const promise = new Promise ( (resolve,reject) => {
        setTimeout( () => resolve(stock[0]), 2000 )
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
         imgURL={product.imgURL}/>
        
         : console.log("Cargando...")
        );
}
export default ItemDetailContainer;
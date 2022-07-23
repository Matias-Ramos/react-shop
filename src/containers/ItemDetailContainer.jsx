import ItemDetail from "../components/ItemDetail";
import {useState, useEffect} from "react";
import stock from "../data/stock.json";
import Loading from "../components/Loading";
import { useParams } from "react-router";

const ItemDetailContainer = () => {
    
    //Url-param
    const { itemId } = useParams();

    //state-variable
    const [product, setProductObject] = useState();

    useEffect( () => { 

        //promise
        const promise = new Promise ( (resolve,reject) => {
            setTimeout( () => resolve(
                stock.find( item => item.id === parseInt(itemId) )
                ), 2000 )
        })
        
        //promise assignment to state-variable
        promise.then( (datafromPromise) => 
        {
            setProductObject(datafromPromise)
        } )
    }, [itemId] )


    return ( 
        product ? <ItemDetail productInfo={product}/> : <Loading />
        );
}
export default ItemDetailContainer;
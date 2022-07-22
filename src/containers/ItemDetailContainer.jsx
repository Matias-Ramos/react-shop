import ItemDetail from "../components/ItemDetail";
import {useState, useEffect} from "react";
import stock from "../data/stock.json";
import Loading from "../components/Loading";
import { useParams } from "react-router";

const ItemDetailContainer = () => {
    
    const { itemId } = useParams();
    //state-variable declaration
    const [product, setProductObject] = useState();

    useEffect( () => {
        if(itemId === undefined)
        {
            //promise
            const promise = new Promise ( (resolve,reject) => {
                setTimeout( () => resolve(stock[1]), 2000 )
            })
            //promise assignment to state-variable
            promise.then( (datafromPromise) => 
            {
                setProductObject(datafromPromise)
            } )
        }
        else
        {
            //promise
            const promise = new Promise ( (resolve,reject) => {
                setTimeout( () => resolve(
                    stock.find( item => item.id === parseInt(itemId) )
                    ), 2000 )
            })
            //promise assignment to state-variable
            promise.then( (datafromPromise) => 
            {
                console.log(datafromPromise)
                setProductObject(datafromPromise)
            } )
        }
    }, [itemId] )


    return ( 
        product ? <ItemDetail productInfo={product}/> : <Loading />
        );
}
export default ItemDetailContainer;
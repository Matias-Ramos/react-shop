import React, {useState, useEffect} from "react";
import ItemList from "../components/ItemList";
import stock from "../data/stock.json";
import Loading from "../components/Loading";
import { useParams } from "react-router";

const ItemListContainer = () =>
{  
    //Url-param
    const { categoryId } = useParams();

    //state-variable
    const [arrayOfProducts , setProductsList] = useState();

    useEffect( () => {

        //promise
        const promise = new Promise ( (resolve, reject) => {
            setTimeout( () => resolve(
                //no category = return allstock, else filtercategory in stock
                categoryId===undefined? (stock) : stock.filter( item => item.category === categoryId )
                ), 2000);
        } )

        //promise assignment to state-variable
        promise.then( (dataFromPromise) => {
            setProductsList(dataFromPromise);
        } );

    }, [categoryId] )


    return(
        arrayOfProducts ? <ItemList arrayOfProducts={arrayOfProducts}/> : <Loading />
    );
}
export default ItemListContainer;


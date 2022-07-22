import React, {useState, useEffect} from "react";
import ItemList from "../components/ItemList";
import stock from "../data/stock.json";
import Loading from "../components/Loading";
import { useParams } from "react-router";

const ItemListContainer = () =>
{  
    const { categoryId } = useParams();

    //state-variable declaration
    const [arrayOfProducts , setProductsList] = useState();


    useEffect( () => {
        if(categoryId===undefined)
        {//promise
        const promise = new Promise ( (resolve, reject) => {
            setTimeout( () => resolve(stock), 2000);
        } )
        //promise assignment to state-variable
        promise.then( (dataFromPromise) => {
            setProductsList(dataFromPromise);
        } );}

        if(categoryId==="summer")
        {//promise
        const promise = new Promise ( (resolve, reject) => {
            setTimeout( () => resolve(
                stock.filter( item => item.category === categoryId )
                ), 2000);
        } )
        //promise assignment to state-variable
        promise.then( (dataFromPromise) => {
            setProductsList(dataFromPromise);
        } );}
    
        if(categoryId==="winter")
        {//promise
        const promise = new Promise ( (resolve, reject) => {
            setTimeout( () => resolve(
                stock.filter( item => item.category === categoryId )
                ), 2000);
        } )
        //promise assignment to state-variable
        promise.then( (dataFromPromise) => {
            setProductsList(dataFromPromise);
        } );}


    }, [categoryId] )


    return(
        arrayOfProducts ? <ItemList arrayOfProducts={arrayOfProducts}/> : <Loading />
    );
}
export default ItemListContainer;


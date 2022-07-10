import 'bootstrap/dist/css/bootstrap.min.css';
import * as Btsp from 'react-bootstrap';
import React, {useState} from "react";



const ItemCount = (props) =>{

    const [amountOfItems, setAmount] = useState(1);
    
    const productMinusOne = () => {
        if(amountOfItems>1)
        {
            const aux = amountOfItems - 1;
            setAmount(aux);
        }
            
    }
    
    const productPlusOne = () => {
        if(amountOfItems<props.stock)
        {
            const aux = amountOfItems + 1;
            setAmount(aux);
        }
    }
    
    const addToCart = () => {
        console.log(`Compraste: ${amountOfItems} items`)
    }

    return(
    <>
            <Btsp.Container>
                <Btsp.Row className="justify-content-md-center">
                    
                    {/*Menos productos*/}
                    <Btsp.Col xs xl lg="2">
                        <Btsp.Button variant="primary" onClick={()=>productMinusOne()}> - </Btsp.Button>
                    </Btsp.Col>

                    {/*Indicador de cantidad*/}
                    <Btsp.Col md="auto">{amountOfItems}</Btsp.Col>
                    
                    {/*Mas productos*/}
                    <Btsp.Col xs xl lg="2">
                        <Btsp.Button variant="primary" onClick={()=>productPlusOne()}> + </Btsp.Button>
                    </Btsp.Col>
                
                </Btsp.Row>
            </Btsp.Container>
            <Btsp.Button variant="primary" onClick={()=>addToCart()}>Agregar al carrito</Btsp.Button>
    </>
    );
}

export default ItemCount;


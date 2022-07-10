import 'bootstrap/dist/css/bootstrap.min.css';
import * as Btsp from 'react-bootstrap';
import React, {useState} from "react";



const ItemCount = () =>{

    const [amountOfItems, setRates] = useState(1);
    const productMinusOne = () => setRates(amountOfItems-1);
    const productPlusOne = () => setRates(amountOfItems+1);

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
            <Btsp.Button variant="primary">Agregar al carrito</Btsp.Button>
    </>
    );
}

export default ItemCount;


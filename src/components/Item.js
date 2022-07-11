import React from "react";
import ItemCount from "./ItemCount";
import * as Btsp from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Item = ({prenda}) => {
    return(
    <>
        <Btsp.Card className="d-inline-block" style={{ width: '18rem' }}>
            {/* IMG 
            <Btsp.Card.Img variant="top" src={require("../assets/campera.png")}/> */}
            <Btsp.Card.Body>
                <Btsp.Card.Title>{prenda.title}</Btsp.Card.Title>
                <Btsp.Card.Text>Precio: ${prenda.price}</Btsp.Card.Text>
                <Btsp.Card.Text>Color: {prenda.color}</Btsp.Card.Text>
                <Btsp.Card.Text>Stock: {prenda.stock}</Btsp.Card.Text>
                <ItemCount stock={prenda.stock}/>
            </Btsp.Card.Body>
        </Btsp.Card>
    </>
    );
}

export default Item;
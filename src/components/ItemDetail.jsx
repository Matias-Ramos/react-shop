import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCount from "./ItemCount"

const ItemDetail = (props) => 
{
    return (
    <>
        <Container id="itemDetail">
            <Row>
                <Col>
                    <img src={props.imgURL} alt=""/>
                </Col>
                <Col className="d-flex flex-column justify-content-center">
                    <h1>{props.title} {props.color}</h1>
                    <h2>${props.price}</h2>
                    <span><i>(Stock: {props.stock})</i></span>
                    <ItemCount stock={props.stock}/>
                </Col>
            </Row>
        </Container>
    </>
    );
}

export default ItemDetail;
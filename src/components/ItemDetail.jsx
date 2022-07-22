import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCount from "./ItemCount"

const ItemDetail = ({productInfo}) => 
{
    return (
    <>
        <Container id="itemDetail">
            <Row>
                <Col>
                    <img src={productInfo.imgURL} alt=""/>
                </Col>
                <Col className="d-flex flex-column justify-content-center">
                    <h1>{productInfo.title} {productInfo.color}</h1>
                    <h2>${productInfo.price}</h2>
                    <span><i>(Stock: {productInfo.stock})</i></span>
                    <ItemCount stock={productInfo.stock}/>
                </Col>
            </Row>
        </Container>
    </>
    );
}

export default ItemDetail;
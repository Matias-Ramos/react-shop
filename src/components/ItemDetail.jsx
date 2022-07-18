import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ItemDetail = (props) => 
{
    //const {title, color}= props.clothe;
    return (
    <>
        <Container>
            <Row>
                <Col>
                    <img src="../.../images/cart_icon.png" />
                </Col>
                <Col>
                    <h1>{props.title}</h1>
                    <h2>{props.color}</h2>
                </Col>
            </Row>
        </Container>
    </>
    );
}

export default ItemDetail;
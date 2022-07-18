import 'bootstrap/dist/css/bootstrap.min.css';
import * as Btsp from 'react-bootstrap';
import CartWidget from './CartWidget';

const NavBar = () => {
    return(
      <>
        <Btsp.Navbar bg="primary" variant="dark">
            <Btsp.Container>
                <Btsp.Navbar.Brand href="#home">TiendaMia</Btsp.Navbar.Brand>
                <Btsp.Nav className="me-auto">
                    <Btsp.Nav.Link href="#features" className='d-flex align-items-center'>Productos</Btsp.Nav.Link>
                    <Btsp.Nav.Link href="#pricing" className='h-100'>
                      <CartWidget />
                    </Btsp.Nav.Link>
                    <Btsp.Form className="d-flex">
                        <Btsp.FormControl
                        type="search"
                        placeholder="Buscar productos..."
                        className="me-2"
                        aria-label="Search"/>
                        <Btsp.Button variant="dark" className='d-flex align-items-center'><img src="https://icongr.am/octicons/search.svg?size=25&color=ffffff" alt="Search icon"/></Btsp.Button>
                    </Btsp.Form>
                </Btsp.Nav>
            </Btsp.Container>
        </Btsp.Navbar>
      </>
    );
  }

export default NavBar;


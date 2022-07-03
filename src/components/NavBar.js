import * as Btsp from 'react-bootstrap';

const NavBar = () => {
    return(
      <>
        <Btsp.Navbar bg="primary" variant="dark">
            <Btsp.Container>
                <Btsp.Navbar.Brand href="#home">TiendaMia</Btsp.Navbar.Brand>
                <Btsp.Nav className="me-auto">
                    <Btsp.Nav.Link href="#features">Productos</Btsp.Nav.Link>
                    <Btsp.Nav.Link href="#pricing">Carrito</Btsp.Nav.Link>
                    <Btsp.Form className="d-flex">
                        <Btsp.FormControl
                        type="search"
                        placeholder="Buscar productos..."
                        className="me-2"
                        aria-label="Search"/>
                        <Btsp.Button variant="dark"><img src="https://icongr.am/octicons/search.svg?size=25&color=ffffff"/></Btsp.Button>
                    </Btsp.Form>
                </Btsp.Nav>
            </Btsp.Container>
        </Btsp.Navbar>
      </>
    );
  }

export default NavBar;
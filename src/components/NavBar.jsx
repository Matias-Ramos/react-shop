import 'bootstrap/dist/css/bootstrap.min.css';
import * as Btsp from 'react-bootstrap';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return(
      <>
        <Btsp.Navbar bg="primary" variant="dark">
            <Btsp.Container>
              <Link to="/"><Btsp.Navbar.Brand>TiendaMia</Btsp.Navbar.Brand></Link>
                <Btsp.Nav className="me-auto">

                    {/* Categories */}
                    <div className='d-flex align-items-center'>
                      <Link to="/category/summer"> 
                        <button>Verano</button>
                      </Link>
                    </div>
                    <div className='d-flex align-items-center'>
                      <Link to="/category/winter">
                        <button>Invierno</button>
                      </Link>
                    </div>
                    

                    {/* Cart */}
                    <CartWidget />


                    {/* Search */}
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


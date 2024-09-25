
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    // <nav className="">
    //   <Link to="/">Homes</Link>
    //   <Link to="/table">Tables</Link>
    //   <Link to="/abouts">About</Link>
    //   <Link to="/video">video</Link>
    // </nav>


    <Navbar bg="light" data-bs-theme="light">
    <Container>
      <Navbar.Brand href="#home"> <img
              alt=""
              src="https://react-bootstrap.netlify.app/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/table">Table</Nav.Link>
            <Nav.Link href="/video">Pricing</Nav.Link>
          </Nav>
    </Container>
  </Navbar>
    
  );
}

export default Header; 

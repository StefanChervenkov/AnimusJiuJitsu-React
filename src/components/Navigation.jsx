import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navigation() {
  const textStyle = {
    fontSize: '1.5rem',
  }
  
  
  
  return (
    <Navbar style={textStyle} bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
        <img
              alt=""
              src="https://animusjiujitsu.eu/wp-content/uploads/2023/11/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          
          Animus Jiu Jitsu
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Students</Nav.Link>
            <Nav.Link href="#link">Login</Nav.Link>
            <Nav.Link href="#link">Register</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
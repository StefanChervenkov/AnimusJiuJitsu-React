import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

function NavigationAuthenticated() {
  const textStyle = {
    fontSize: '1.5rem',
  }

  function handleSignOut() {
    signOut(auth).then(() => {
      console.log("Sign out successful!");
    })
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
            <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
            <Nav.Link as={Link} to={'/login'}>Login</Nav.Link>
            <Nav.Link as={Link} to={'/register'}>Register</Nav.Link>
            <Nav.Link as={Link} to={'/students'}>Students</Nav.Link>
            <Nav.Link as={Link} to={'/students/add'}>Add Students</Nav.Link>
            <Nav.Link as={Link} to={'/profile'}>Profile</Nav.Link>
            <Nav.Link onClick={handleSignOut}>Sign Out</Nav.Link>
            

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationAuthenticated;
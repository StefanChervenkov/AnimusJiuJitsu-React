
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

export default function Register() {
    const containerStyles = {
        backgroundColor: '#343a40', // Dark background color
        color: '#ffffff', // White text color
        padding: '30px',
        border: '3px solid #343a40',
        margin: '30px 60px 30px',
        
    };

    return (
        <Container style={containerStyles}>
            <Row className='justify-content-center'>
                <Col md={6}>
                    <div className='text-center'>
                        <img
                            src="https://animusjiujitsu.eu/wp-content/uploads/2023/11/logo.png"
                            width="180"
                            height="180"
                            alt="" />
                    </div>

                    <article className="register-page-form-subtitle">
                        <h3 className="register-page-form-subtitle-text">
                            Register
                        </h3>
                    </article>

                    <hr />

                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter Username" />
                            
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicRepeatPassword">
                            <Form.Label>Repeat Password</Form.Label>
                            <Form.Control type="password" placeholder="Repeat Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                    </Form>
                </Col>

            </Row>



        </Container>



    );
}


import { useRef, useState } from 'react';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../firebase';
import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap'

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState('');

    function handleSubmit(e) {
        e.preventDefault();


        signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
            });
    };

    function handlePasswordReset(e) {
        e.preventDefault();
        const email = prompt('Please, enter your email!')
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Email sent! Check your inbox for password reset inmstructions.')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }


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

                    <article className="login-page-form-subtitle">
                        <h3 className="login-page-form-subtitle-text">
                            Login to see your Jiu Jitsu progress
                        </h3>
                    </article>

                    <hr />
                    {error && <Alert variant='danger'> {error} </Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" id="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" ref={emailRef} required />

                        </Form.Group>

                        <Form.Group className="mb-3" id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" ref={passwordRef} required />
                        </Form.Group>

                        <Button className='w-100' variant="primary" type="submit" >
                            Login
                        </Button>

                        <Card.Text className="mt-2">
                            <Card.Link href="#" onClick={handlePasswordReset}>
                                Forgot Password?
                            </Card.Link>
                        </Card.Text>
                    </Form>
                </Col>

            </Row>



        </Container>



    );
}


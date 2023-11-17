import { useRef, useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Link } from "react-router-dom";

import {  createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase'

export default function Register() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const repeatPasswordRef = useRef();

    const [error, setError] = useState('');

    const containerStyles = {
        backgroundColor: '#343a40', // Dark background color
        color: '#ffffff', // White text color
        padding: '30px',
        border: '3px solid #343a40',
        margin: '30px 60px 30px',

    };

    function handleSubmit(e) {
        e.preventDefault();
        //const auth = getAuth();

        if (passwordRef.current.value !== repeatPasswordRef.current.value) {
            return setError('Passwords must match!');
        }

        createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
                
            });
    }



    return (
        <>
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

                        {error && <Alert variant='danger' >{error} </Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" id="email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" ref={emailRef} required />

                            </Form.Group>


                            <Form.Group className="mb-3" id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" ref={passwordRef} required />
                            </Form.Group>

                            <Form.Group className="mb-3" id="repeatPassword">
                                <Form.Label>Repeat Password</Form.Label>
                                <Form.Control type="password" placeholder="Repeat Password" ref={repeatPasswordRef} required />
                            </Form.Group>

                            <Button className='w-100' variant="primary" type="submit">
                                Register
                            </Button>
                        </Form>
                    </Col>

                </Row>

                <div className='w-100 text-center mt-2'>
                    <span> Already have an account?</span> <Link to={'/login'}>Log In</Link> 
                </div>

            </Container>

        </>




    );
}


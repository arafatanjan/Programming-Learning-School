import React from 'react';
import Form from 'react-bootstrap/Form';
import { Button, Container } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <Container >
            <div className="mt-5 px-5 ">
                <h6>Login Form</h6>
                <Form className="px-5">
                    <Form.Group className="email-container mb-4" controlId="formGroupEmail">
                        <Form.Label >Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="email-container mb-1 px-1" controlId="formGroupPassword">
                        <Form.Label className="ml-5">Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form>
                <div className="button-container ">
                    <Button variant="primary">Login</Button>
                </div>

            </div >
        </Container>
    );
};

export default Footer;
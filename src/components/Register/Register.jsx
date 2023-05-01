import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import app from '../firebase/firebase.config';

const Register = () => {
    const auth = getAuth(app)
    

    const handleRegister = (event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        const pass = event.target.password.value;
        console.log(email, pass);


        createUserWithEmailAndPassword(auth, email, pass)
        .then(result =>{
            const logedUser = result.user;
            console.log(logedUser);
        })
        .catch(error => {
            console.log('Error', error.message);
        })
    }

    

    
    return (
        <div>
            <Form onSubmit={ handleRegister }>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Register;
import React, { useState, useEffect } from 'react';
import './RegisterComponent.css'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';


const RegisterComponent = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState(false)


  
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    

    const validateForm = (event) => {
        event.preventDefault();

        if (username.length < 5 || !email.match(pattern) || password.length < 8 || confirmPassword !== password) {
            setError(true)
        }
        if (username.length >= 5 && email.match(pattern) && password.length >= 8 && confirmPassword === password) {
            console.log("submitted")
        }



    }

    return (
        <>
            <div className='register'>

                <h1 className='register-h1'>FOOD TIME</h1>
                <h5 className='register-h5'>Please Register to continue</h5>
                <Form className='register-form-div' onSubmit={validateForm} >

                    <h1 className='h1-register'>Register</h1>
                    <Form.Group className="mb-3" >
                        <Form.Label className='label'>Username</Form.Label>
                        <Form.Control onChange={e => setUsername(e.target.value)} className='register-text' type="text" placeholder="Username" />
                        {error && username.length < 5 ? <Form.Label className='label error-bg'>Username must be above 5 characters</Form.Label> : ''}
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label className='label'>Email</Form.Label>
                        <Form.Control onChange={e => setEmail(e.target.value)} className='register-text' type="text" placeholder="Email" />
                        {error && !email.match({ pattern }) ? <Form.Label className='label error-bg'>Email validation error must inclued @ .com TryAgain!</Form.Label> : ''}
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label className='label'>Password</Form.Label>
                        <Form.Control onChange={e => setPassword(e.target.value)} className='register-text' type="text" placeholder="Password" />
                        {error && password.length < 8 ? <Form.Label className='label error-bg'>Password must not be less than 8 characters</Form.Label> : ''}
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label className='label'>Confirm Password</Form.Label>
                        <Form.Control onChange={e => setConfirmPassword(e.target.value)} className='register-text' type="text" placeholder="Confirm Password" />
                        {error && confirmPassword !== password ? <Form.Label className='label error-bg'>Passoword dont match</Form.Label> : ''}
                    </Form.Group>
                    <Button className='register-button' variant="primary" type="submit" >
                        Submit
                    </Button>
                    <h5 className='register-h5-login'>
                        Already have an account? 
                        <Link to="/login">
                            <span className='sign-in'>Sign in</span> 
                        </Link>
                    </h5>
                </Form>
            </div>
        </>

    )
}

export default RegisterComponent
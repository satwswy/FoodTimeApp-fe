import React, { useState, useEffect } from 'react';
import './LoginComponent.css'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';


const LoginComponent = () => {

  
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const validateForm = (event) => {
        event.preventDefault();

       
        


    }
    

    return (
        <>
            <div className='login'>            
                <Form className='login-form-div' onSubmit={validateForm} >
                    <h1 className='h1-login'>Login</h1>
                    <Form.Group className="mb-3" >
                        <Form.Label className='label'>Email</Form.Label>
                        <Form.Control onChange={e => setEmail(e.target.value)} className='login-text' type="text" placeholder="Email" />                      
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label className='label'>Password</Form.Label>
                        <Form.Control onChange={e => setPassword(e.target.value)} className='login-text' type="text" placeholder="Password" />
                    </Form.Group>
                    <Button className='login-button' variant="primary" type="submit" >
                        <span className='span-log'>Login</span>
                        
                    </Button>
                    <h5 className='login-h5-register'>
                        Don't have an account? 
                        <Link to="/register">
                            <span className='sign-up'>Sign up</span> 
                        </Link>
                    </h5>
                </Form>
            </div>
        </>

    )
}

export default LoginComponent
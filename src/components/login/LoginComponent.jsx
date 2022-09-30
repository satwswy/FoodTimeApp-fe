import React, { useState, useEffect } from 'react';
import './LoginComponent.css'
import { Form, Button } from 'react-bootstrap'


const LoginComponent = () => {

  
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const validateForm = (event) => {
        event.preventDefault();

       
        


    }
    

    return (
        <>
            <div className='login'>

                <h1 className='login-h1'>FOOD TIME</h1>
                <h5 className='login-h5'>Please Login to continue</h5>
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
                        Login
                    </Button>
                </Form>
            </div>
        </>

    )
}

export default LoginComponent
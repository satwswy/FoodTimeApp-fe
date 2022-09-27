import React from 'react'
import './RegisterComponent.css'
import { Form, Button } from 'react-bootstrap'

const RegisterComponent = () => {
    return (
        <>
            <div className='register'>
                <h1 className='register-h1'>FOOD TIME</h1>
                <h5 className='register-h5'>Please Register to continue</h5>
                <Form className='register-form-div'>
                    <h1 className='h1-register'>Register</h1>
                    <Form.Group className="mb-3" >
                        <Form.Label className='label'>Username</Form.Label>
                        <Form.Control className='register-text' type="text" placeholder="Username" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label className='label'>Email</Form.Label>
                        <Form.Control className='register-text' type="text" placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label className='label'>Date of birth</Form.Label>
                        <Form.Control className='register-text' type="date" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label className='label'>Password</Form.Label>
                        <Form.Control className='register-text' type="text" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label className='label'>Confirm Password</Form.Label>
                        <Form.Control className='register-text' type="text" placeholder="Confirm Password" />
                    </Form.Group>
                    <Button className='register-button' variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </>

    )
}

export default RegisterComponent
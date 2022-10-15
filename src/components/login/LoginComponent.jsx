import React, { useState, useEffect, useContext } from 'react';
import './LoginComponent.css'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {

    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
    });

    const {loading, error, dispatch } = useContext(AuthContext);

    const navigate = useNavigate()

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("/auth/login", credentials);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
            navigate("/")
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
    };
    return (
        <>
            <div className='login'>
                <Form className='login-form-div'>
                    <h1 className='h1-login'>Login</h1>
                    <Form.Group  className="mb-3" >
                        <Form.Label className='label' >Username</Form.Label>
                        <Form.Control id="username" onChange={handleChange} className='login-text' type="text" placeholder="Username" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label className='label'>Password</Form.Label>
                        <Form.Control id="password" onChange={handleChange} className='login-text' type="text" placeholder="Password" />
                    </Form.Group>
                    <Button disabled={loading} onClick={handleClick} className='login-button' variant="primary" type="submit" >
                        <span className='span-log'>Login</span>
                    </Button>
                    {error && <span>{error.message}</span>}
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
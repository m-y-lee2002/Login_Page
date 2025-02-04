import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './LoginStyles/LoginForm.css';
const LoginForm = () =>{
    const submitHandler = (e) =>{
        e.preventDefault();
        alert('submit button pressed');
    }
    return(
        <div className='login_form_container'>
            <form onSubmit={submitHandler}>
                <Container fluid>
                    <Row className='email_container'>
                        <Col>
                            <Row>
                                <label id='email_label'>
                                    Email
                                </label>
                            </Row>
                            <Row>
                                <input/>
                            </Row>
                        </Col>
                    </Row>
                    <Row className='password_container'>
                        <Col>
                            <Row>
                                <label id='passsword_label'>
                                    Password
                                </label>
                            </Row>
                            <Row>
                                <input/>
                            </Row>
                        </Col>
                    </Row>
                    <Row className='submit_container'>
                        <Col className='submit_column'>
                            <button type="submit" id='login_button'>Login</button>
                        </Col>
                    </Row>
                </Container>
            </form>
        </div>
    )
}
export default LoginForm;
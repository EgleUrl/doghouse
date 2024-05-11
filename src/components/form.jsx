import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';

const UserForm = () => {
    const [validated, setValidated] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    

    const handleFormSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();            
            // Show the alert            
        } else {            
            setFormSubmitted(true);
            alert('Form is submitted successfully!');            
        }
        setValidated(true);        
    };

    return (
        <div className='form-area'>
            <div className='mt-4 me-4 mx-4 pb-4 auto'>
                <Form noValidate validated={validated} onSubmit={handleFormSubmit}>                    
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="validationCustom01">
                            <Form.Label>First name *</Form.Label>
                            <FloatingLabel controlId="floatingInput" label="First name" className="mb-2">                            
                                <Form.Control required type="text" placeholder="First name" />                       
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback> 
                                <Form.Control.Feedback type="invalid">
                                    Please provide your first name.
                                </Form.Control.Feedback>                           
                            </FloatingLabel>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="validationCustom02">
                            <Form.Label>Last name *</Form.Label>
                            <FloatingLabel controlId="floatingInput" label="Last name" className="mb-2">                            
                                <Form.Control required type="text" placeholder="Last name" />                       
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    Please provide your last name.
                                </Form.Control.Feedback>                                          
                            </FloatingLabel>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="validationCustom03">
                            <Form.Label>Email *</Form.Label>
                            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">                            
                                <Form.Control required type="email" placeholder="name@example.com" />                       
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid email address.
                                </Form.Control.Feedback> 
                            </FloatingLabel>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="validationCustom04">
                            <Form.Label>Message *</Form.Label>
                            <Form.Control as="textarea" rows={7} required />                       
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please provide your inquiry.
                            </Form.Control.Feedback> 
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Check required label="Agree to terms and conditions" feedback="You must agree before submitting." feedbackType="invalid"/>
                    </Form.Group>                    
                    <Button variant="outline-dark" size='lg' type="submit">Submit form</Button>                    
                </Form>              
            </div> 
        </div> 
    );
}
export default UserForm

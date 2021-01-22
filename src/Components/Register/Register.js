import { Component } from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';
import Input from '../../Components/UI/Input/Index';
import './Register.css'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    render() {
        return (
            <div className="register">
                <h1>Registration Form</h1>
                
                <Container fluid="justify-content-md-center">
                    <Row style={{ marginTop: "30px" }}>
                        <Col md={{ span: 8, offset: 2 }}>
                            <Form>
                                
                                <Row>
                                    <Col >
                                        <Input
                                            label="FirstName"
                                            type="text"
                                            // placeholder="Enter your Firstname"
                                            onChange={() => { }}
                                        />
                                    </Col>
                                    <Col >
                                        <Input
                                            label="LastName"
                                            type="text"
                                            value=""
                                            // placeholder="Enter your Lastname"
                                            onChange={() => { }}
                                        />
                                    </Col>
                                    <Col >
                                        <Input
                                            label="Email  Id"
                                            type="text"
                                            value=""
                                            // placeholder="Enter your Email address"
                                            onChange={() => { }}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Input
                                            label="Password"
                                            type="password"
                                            value=""
                                            // placeholder="Enter your Password"
                                            onChange={() => { }}
                                        />
                                    </Col>

                                </Row>

                                <button type="submit" className="btn btn-primary">SIGN UP</button>
                            </Form>

                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }

}
export default Register;
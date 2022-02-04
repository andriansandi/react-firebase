import React, { Component } from "react"
import firebase from '../services/firebase'

import {
    Container,
    Row,
    Col,
    Card,
    CardTitle,
    CardBody,
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {}
    }

    set = name => event => {
        this.setState({
            [name]: event.target.value
        })
    }

    handleLogin = async e => {
        // 

        const { email, password } = this.state
        e.preventDefault()

        // Validasi
        if(!email || !password) return alert('Please insert missing credentials!')

        // Register via Firebase
        try {
            const login = await firebase.auth().signInWithEmailAndPassword(email, password)
            console.log("LOGIN DARI FIREBASE: " + JSON.stringify(login))
            // alert('Success Register')
            
            this.setState({
                email: '',
                password: ''
            })

        } catch(error) {
            alert('Failed to login')
            console.log(error)
        }
    }

    render() {
        return(
            <div className="loginpage mt-4">
                <Container>
                    <Row>
                        <Col sm="12" md={{ offset: 3, size: 6 }} lg="6" xl="6">
                            <Card>
                                <CardTitle tag="h5" className="p-3 text-center">Login</CardTitle>
                                <CardBody>
                                    <Form onSubmit={this.handleLogin}>
                                        <FormGroup>
                                            <Label for="email">Email Address</Label>
                                            <Input type="email" onChange={this.set('email')} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="password">Password</Label>
                                            <Input type="password" onChange={this.set('password')} />
                                        </FormGroup>
                                        <Button block type="submit">Login</Button>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Login
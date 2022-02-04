import React from "react"

import {
    Container,
    Row,
    Col,
    Card,
    CardTitle,
    CardBody
} from 'reactstrap'

export default function Login() {
    return(
        <div className="loginpage mt-4">
            <Container>
                <Row>
                    <Col sm="12" md={{ offset: 3, size: 6 }} lg="6" xl="6">
                        <Card>
                            <CardTitle tag="h5">Login</CardTitle>
                            <CardBody>
                                <p>Lorem ipsum</p>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
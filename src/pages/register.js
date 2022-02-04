import React from "react"

import {
    Container,
    Row,
    Col,
    Card,
    CardTitle,
    CardBody
} from 'reactstrap'

export default function Register() {
    return(
        <div className="registerpage mt-4">
            <Container>
                <Row>
                    <Col sm="12" md={{ offset: 3, size: 6 }} lg="6" xl="6">
                        <Card>
                            <CardTitle tag="h5">Register</CardTitle>
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
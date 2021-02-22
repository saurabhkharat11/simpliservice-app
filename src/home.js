import React from 'react'
import './home.css'
import {Jumbotron, Container, Row, Col, Image} from 'react-bootstrap'


export default function HomeScreen (){


    return(
    <div>
        <Jumbotron fluid style={{marginTop:"54px", backgroundColor:"cyan"}}>
            <Container>
                <h1>Reliable service, guaranteed!</h1>
                <p>
                We at <strong>SimpliService</strong> are committed to provide you high quality services with excellent support for your queries and timely updates for latest offers. Just Login, Book a Service and let us handle the rest. You may drop us a mail in the Contact section, we would love to hear your feedback.
                </p>
            </Container>
        </Jumbotron>
        <div className="container">
            <h3 style={{textAlign:"center",fontWeight:'bold',color:'black'}}>Our Services</h3>
        </div>
        
        <Container style={{marginTop:"30px"}}>
            <Row style={{textAlign:"center"}}>
                <Col>
                    <Image src="/car-wash.jpg" width="190" height="190" roundedCircle />
                </Col>
                <Col>
                    <Image src="/bike-service.jpg" width="190" height="190"  roundedCircle />
                </Col>
                <Col>
                    <Image src="/mountain-bike.jpg" width="190" height="190"  roundedCircle />
                </Col>
            </Row>
        </Container>

        <Container style={{marginTop:"30px"}}>
            <Row style={{textAlign:"center"}}>
                <Col><h4>Car Washing</h4></Col>
                <Col><h4>Motorcycle Servicing</h4></Col>
                <Col><h4>Mountain-Bike Servicing</h4></Col>
            </Row>
        </Container>
        
    </div>
    );
}
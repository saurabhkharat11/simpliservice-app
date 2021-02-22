import React from 'react'
import {Row, Col, Container, Card,  Button} from 'react-bootstrap'
import firebase from './Firebase';
import './services.css'

export default class ServiceComp extends React.Component {
    constructor(){
        super();
        this.ref = firebase.firestore().collection('available-services');
        this.state = {
            s_data : []
        }
    }

    componentDidMount(){
        const service_data = [];
        this.ref.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const {service_name , service_cost, service_desc} = doc.data();
                service_data.push({service_name, service_desc, service_cost});
            });
            this.setState({s_data : service_data});
        });
}

    render(){
        return(
            <div style={{marginTop:"54px"}}>
            <Container>
                <Row style={{textAlign:"center"}}>
                    <Col>
                    {this.state.s_data.map(s_d => <Card id="service-card">
                        <Card.Body>
                            <Card.Title><strong>{s_d.service_name}</strong></Card.Title>
                            <Card.Text>
                                {s_d.service_desc}
                            </Card.Text>
                            <Button variant="primary" id="book-service-btn">Book for Rs.{s_d.service_cost}/-</Button>
                        </Card.Body>
                    </Card>)}
                    </Col>
                </Row>
            </Container>
        </div>
        );
    }
}
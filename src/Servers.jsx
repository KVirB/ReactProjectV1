import React from 'react';
import './Servers.css';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import image from './img/avatar.png';
import 'bootstrap/dist/css/bootstrap.min.css';



class Servers extends React.Component {

    render(){
        return(
        <Container className="mt-5">  
            { 
            this.props.servers.map(m => <Row key={m.id} className="block">
                <Col className="mb-3">
                <Card>
                    <Card.Body>
                        <Card.Title className="mr-2">
                        
                        <span className="mr-2">{m.name}</span>
                        
                        </Card.Title>
                            <Card.Text>
                            <span className="ml-1">{m.about}</span>
                            </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>) 
            }
        </Container>
        )
    }
}


export default Servers;
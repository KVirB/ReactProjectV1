import React from 'react';
import './index.css';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import image from './img/avatar.png';




class Servers extends React.Component {

    render(){
        return(
        <Container className="mt-5">
            {this.props.servers.map(m => <Row key={m.id} className="block">

                <Col className="mb-3 ">
                <Card>
                    <Card.Body>
                        <Card.Title className="mr-2 ">
                        <Image src={image} roundedCircle className="size mr-4"/>
                         <span className="mr-2">{m.name}</span> 
                         <span>{m.about}</span> 
                        </Card.Title>
                    </Card.Body>
                </Card>
                </Col>
                </Row>) 
            }
        </Container>
        );
    }
}


export default Servers;
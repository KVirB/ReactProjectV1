import React from 'react';
import './index.css';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import image from './img/avatar.png';
import Main from './Main';



class Servers extends React.Component {

    render(){
        return(
        <Container fluid className="mine2">

                <Row >
                    <Col>
                        <Main/>
                    </Col>
                </Row>

                <Col className="mb-3 ">
                <Card className="mine2">
                    <Card.Body>
                        <Card.Title className="mr-2 ">
                        <Image src={image} roundedCircle className="size mr-4"/>
                        {/* <span className="mr-2">{m.firstName}</span> */}
                        {/* <span>{m.lastName}</span> */}
                        </Card.Title>
                            <Card.Text>
                            {/* <span className="ml-1">{m.serverOf}</span> */}
                            </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
        </Container>
        );
    }
}


export default Servers;
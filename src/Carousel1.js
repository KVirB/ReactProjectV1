import React from 'react';
import { Row, Carousel, Container, Col} from 'react-bootstrap';
import image from './img/mine2.jpg';
import image2 from './img/mine4.gif';
import 'bootstrap/dist/css/bootstrap.min.css';



class Carousel1 extends React.Component{

    

    
      render(){
        return(
            
            <Container className="d-block w-50">
            <Row>
               <Col>           
                <Carousel className="size-car">
                    <Carousel.Item className="firstImage " interval={2000}>
                    <img
                        className="d-block w-100"
                        src={image}
                        alt="First slide"
                    />
                    </Carousel.Item >
                    <Carousel.Item className="secondImage" interval={2000}>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                    />
                    </Carousel.Item>
                </Carousel>
                </Col>
            </Row>
            </Container>

            
            
            

        )
    }
}
export default Carousel1;
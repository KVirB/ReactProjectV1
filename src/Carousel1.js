import React from 'react';
import { Row, Carousel, Container } from 'react-bootstrap';
import image from './img/mine2.jpg';
import image2 from './img/volk.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';



class Carousel1 extends React.Component{

    

    
      render(){
        return(
            
            <Container>
            <Row>          
                <Carousel>
                    <Carousel.Item className="firstImg" interval={2000}>
                    <img
                        className="d-block w-100"
                        src={image}
                        alt="First slide"
                    />
                    </Carousel.Item >
                    <Carousel.Item className="secondImg" interval={2000}>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="second slide"
                    />
                    </Carousel.Item>
                </Carousel>
            </Row>    
            
            </Container>
            
            

        )
    }
}
export default Carousel1;
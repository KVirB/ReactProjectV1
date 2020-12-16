import React from 'react';
import fire from './config/fire.js';
import Carousel1 from './Carousel1.js';
import { Container,Row,Col, Carousel } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './index.css';
import Main from './Main.js';
import image from './img/mine2.jpg';
import image2 from './img/mine4.gif';


class Home extends React.Component{

    

    
      render(){
        return(
            
            <Container>
            <Row>          
                <Carousel>
                    <Carousel.Item className="firstImg">
                    <img
                        className="d-block w-100"
                        src={image}
                        alt="First slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item className="secondImg">
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

    
      /*render(){
        return(
            
            <div class="mine2" style={{textAlign: 'center'}}>
                <h1>Вэйк ап самурай!</h1>
                <button onClick = {this.logout}>Logout</button>
            </div>
        )
    }
}*/

export default Home;
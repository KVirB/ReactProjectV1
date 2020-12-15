import React from 'react';
import fire from './config/fire.js';
import Carousel1 from './Carousel1.js';
import { Container,Row,Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './index.css';
import Main from './Main.js';

class Home extends React.Component{

    

    
      render(){
        return(
            
            <Container fluid className="mine2">
                <Row >
                    <Col>
                        <Main/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Carousel1/>
                    </Col>
                </Row>
                <br/><br/><br/><br/><br/>
                <Row>
                    <Col>  
                        <h1 className="colorA">Вэйк ап самурай!</h1>
                    </Col>
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
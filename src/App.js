import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Route, Switch, } from 'react-router-dom';
import Redirect from './Redirect.js';
import Servers from './Servers.js'
import serversContainer from './serversContainer';
import Main from './Main.js';
import Home from './Home.js';


const App = () => {

debugger;
  return (
    <Container>
      <Main/>
       <Row>
            <Col>
              <Route exact path = "/" render ={() => <Redirect />}/>
              <Route exact path = "/servers" render ={() => <serversContainer />}/>
              </Col>
            </Row>
    </Container> 
  );

}

export default App;
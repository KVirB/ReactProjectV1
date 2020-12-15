import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Main from './Main.js';
import { Route, Switch, } from 'react-router-dom';
import Redirect from './Redirect.js';
import { BrowserRouter } from 'react-router-dom';




const App = () => {


  return (
    <BrowserRouter>
      <Switch>
              <Route exact path = "/" component={Redirect}/>
      </Switch>
    </BrowserRouter>
  );

}

export default App;
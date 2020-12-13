import React from 'react';
import fire from './config/fire.js';
import Carousel1 from './Carousel1.js';
import index from './index.js';
class Home extends React.Component{

    logout() {
        fire.auth().signOut();
      }

    
      render(){
        return(
            
            <div class="mine2">
             <Carousel1></Carousel1>   
            <h1>Вэйк ап самурай!</h1>
            <button onClick = {this.logout}>Logout</button>
            </div>
            
            

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
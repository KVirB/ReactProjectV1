import React from 'react';
import fire from './config/fire';
import {ForIFs} from './ForIFs';
class Login extends React.Component{

    signUp() {
        const emailsign = document.querySelector('#emailsign').value;
        const passwordsign = document.querySelector('#passwordsign').value;
        fire.auth().createUserWithEmailAndPassword(emailsign, passwordsign)
          .then((u) => {
            console.log('Successfully Signed Up');
          })
          .catch((err) => {
            console.log(err.toString());
          })
      }
      
      login() {
        const emaillog = document.querySelector('#emaillog').value;
        const passwordlog = document.querySelector('#passwordlog').value;
        fire.auth().signInWithEmailAndPassword(emaillog, passwordlog)
          .then((u) => {
            console.log('Successfully Logged In');
          })
          .catch((err) => {
            console.log(err.toString());
              alert(ForIFs(err.toString()));
          })
      }

    render(){
        return(
            <div class="asdf">
              <div class="container">
                <div class="row">
                  <div class="col-md-offset-3 col-md-6">
                    <div class="tab" role="tabpanel">
                    <ul class="nav nav-tabs" role="tablist">
                    <li role="presentation" class="active"><a href="#Section1" aria-controls="home" role="tab" data-toggle="tab">sign in</a></li>
                    <li role="presentation"><a href="#Section2" aria-controls="profile" role="tab" data-toggle="tab">sign up</a></li>
                    </ul>
                      <div class="tab-content tabs">
                        <div role="tabpanel" class="tab-pane fade in active" id="Section1">
                          <div class="form-horizontal">
                            <div class="form-group">
                              <label for="emaillog">email address</label>
                              <input id="emaillog" placeholder="Enter Email.." type="email"  class="form-control"/>
                            </div>
                            <div class="form-group">
                              <label for="passwordlog">Password</label>
                              <input id="passwordlog" placeholder="Enter Password.." type="password"  class="form-control"/>
                            </div>
                            <div class="form-group">
                            <div class="main-checkbox">
                            <input value="None" id="checkbox1" name="check" type="checkbox"/>
                            <label for="checkbox1"></label>
                            </div>
                            <span class="text">Keep me Signed in</span>
                            </div>
                            <div class="form-group">
                            <button class="btn btn-default" onClick={this.login}>Login</button>
                            </div>
                            <div class="form-group forgot-pass">
                            <button class="btn btn-default">forgot password</button>
                            </div>
                          </div>
                        </div>
                        <div role="tabpanel" class="tab-pane fade" id="Section2">
                              <div class="form-horizontal">
                                <div class="form-group">
                                <label for="emailsign">Email address</label>
                                <input id="emailsign" type="email" class="form-control" placeholder="Enter Email.."/>
                                </div>
                                <div class="form-group">
                                <label for="passwordsign">Password</label>
                                <input id="passwordsign" type="password" class="form-control" placeholder="Enter Password.."/>
                                </div>
                              <button class="btn btn-default" onClick={this.signUp}>Sign Up</button>
                              </div>
                            </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
          
/*<div class="asdf">
  <div class="container">
    <div class="row">
      <div class="col-md-offset-3 col-md-6">

        <div class="tab" role="tabpanel">
        
        <ul class="nav nav-tabs" role="tablist">
        <li role="presentation" class="active"><a href="#Section1" aria-controls="home" role="tab" data-toggle="tab">sign in</a></li>
        <li role="presentation"><a href="#Section2" aria-controls="profile" role="tab" data-toggle="tab">sign up</a></li>
        </ul>
        
          <div class="tab-content tabs">
            <div role="tabpanel" class="tab-pane fade in active" id="Section1">
              <div class="form-horizontal">
                <div class="form-group">
                <label for="email">email address</label>
                <input id="email" placeholder="Enter Email.." type="email" class="form-control"/>
                </div>
                <div class="form-group">
                <label for="password">Password</label>
                <input id="password" placeholder="Enter Password.." type="password" class="form-control"/>
                </div>
                <div class="form-group">
                <div class="main-checkbox">
                <input value="None" id="checkbox1" name="check" type="checkbox"/>
                <label for="checkbox1"></label>
                </div>
                <span class="text">Keep me Signed in</span>
                </div>
                <div class="form-group">
                <button type="submit" class="btn btn-default" onClick={this.login}>Sign in</button>
                </div>
                <div class="form-group forgot-pass">
                <button class="btn btn-default">forgot password</button>
                </div>
                </div>
                </div>
                <div role="tabpanel" class="tab-pane fade" id="Section2">
              <div class="form-horizontal">
                <div class="form-group">
                <label for="email">Email address</label>
                <input id="email" type="email" class="form-control" placeholder="Enter Email.."/>
                </div>
                <div class="form-group">
                <label for="password">Password</label>
                <input id="password" type="password" class="form-control" placeholder="Enter Password.."/>
                </div>
                <div class="form-group">
                <button class="btn btn-default" onClick={this.signUp} >Sign up</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>*/
        )


    }
}

export default Login;
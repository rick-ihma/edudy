import React, {Component} from 'react';
import './css.css';
import BG from '../Assets/bg.png';
import LOGO from '../Assets/logo.png';
import USER from '../Assets/user.png';
import FBLogin from '../Assets/FBLogin.png'
import { Columns,Button } from 'react-bulma-components/full';

class Login extends Component {
  render(){
    return(
      <div className="BG">
        <img className="editLG" src={LOGO}/>
        <Columns>
          <Columns.Column>
            <div className="boxleft">
              <p className="editP">Hello welcome to EDUDY !</p>
              <p className="editP2">Create your account</p>
              <Columns>
                <Columns.Column>
                  <div className="box1">
                  <p className="EDIT">EMAIL</p>
                  <p className="EDIT">FULLNAME</p>
                  <p className="EDIT">USERNAME</p>
                  <p className="EDIT">PASSWORD</p>
                  <p className="EDIT">COUNTRY</p>
                  </div>
                </Columns.Column>
                <Columns.Column>
                  <div className="box2">
                    <input className="inputfirst" class="input is-rounded" type="text"/>
                    <input className="input" class="input is-rounded" type="text"/>
                    <input className="input" class="input is-rounded" type="text"/>
                    <input className="input" class="input is-rounded" type="text"/>
                    <input className="input" class="input is-rounded" type="text"/>
                  </div>
                </Columns.Column>
              </Columns>
            </div>
            </Columns.Column>
          <Columns.Column>
            <div className="boxright">
              <p className="Pright">Sign In</p>
              <div className="box3">
                <img className="USER" src={USER}/>
                  <input class="input is-rounded" type="text"/>
                  <input class="input is-rounded" type="text"/>
                  <a class="button is-link is-rounded">LOGIN</a>
                  <img className="FB" src={FBLogin}/>
              </div>
              </div>
          </Columns.Column>
        </Columns>
      </div>
    );
  }
}
export default Login;

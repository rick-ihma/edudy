import React, {Component} from 'react';
import logo from './Assets/logo.png';
import BG from './Assets/rightH.png';
import './App.css';
import { Columns,Button } from 'react-bulma-components/full';


class App extends Component {
  render(){
    return(
      <Columns>
        <Columns.Column className="columns is-desktop is-mobile is-tablet is-widescreen is-fullhd">
          <div className="left">
          <img className="LG" src={logo}/>
          <p className="para">Edudy school of the future</p>
          </div>
        </Columns.Column>
        <Columns.Column className="columns is-desktop is-mobile is-tablet is-widescreen is-fullhd">
          <div className="right">
          <img className="pic" src={BG}/>
          </div>
        </Columns.Column>
        <Columns.Column className="columns is-desktop is-mobile is-tablet is-widescreen is-fullhd">
          <div className="center">
          <button className="button is-rounded">Into Website</button>
          </div>
        </Columns.Column>
      </Columns>
    );
  }
}
export default App;

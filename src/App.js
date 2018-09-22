import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';

class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home}/>
          <Route path="/Login" component={Login}/>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;

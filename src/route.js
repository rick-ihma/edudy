import React, {Component} from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Main from "./components/Main";
class route extends Component{
  render(){
    return(
      <BrowserRouter>
      <div>
      <Navigation/>
      <Switch>
        <Route path="/" component={Main}/>
        <Route path="">
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default route;

import React, { Component } from 'react';
import Projects from './components/projects/Projects';
import Employees from './components/employees/Employees';
import Timesheets from './components/timesheets/Timesheets';
import Navigation from './components/nav/Navigation';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';

class App extends Component {
  // TODO - actually implement this for realz
  render() {
    return( 
    <BrowserRouter>
    <div className="App">
    <Switch>
      <Route path="/projects" component={Projects}/>
      <Route path="/employees" component={Employees}/>
      <Route path="/employees/:user_id/timesheets"  component={Timesheets}/>
      <Route path="/nav" component={Navigation} />
      <Redirect to="/employees"/>
      </Switch>
      </div>
      </BrowserRouter>

    )
  }
}

export default App;

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './../pages/Home';
import Resume from './../pages/Resume';

import ChatApp from './../pages/projects/ChatApp';

class NotFound extends Component {
  render() {
    return (
      <div>
        <h1>404 Page Not Found</h1>
        <p>We are sorry but the page you are looking for does not exist.</p>
      </div>
    )
  }
}

class Router extends Component {
  render() {
    const url = window.location.href;
    const urlVariable = url.substring(url.lastIndexOf('/') + 1);
    let projectToRender = NotFound;
    switch(urlVariable) {
      case 'Chat%20App': { projectToRender = ChatApp; break; }
      default: { projectToRender = NotFound; break; }
    }
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/resume' component={Resume}/>
        <Route path='/projects/undefined' component={NotFound}/>
        <Route path='/projects/:project' component={projectToRender}/>
        <Route path='*' component={NotFound}/>
      </Switch>
    );
  }
}

export default Router;

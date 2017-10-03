import React, { Component } from 'react';
import Project from './../components/ProjectLink';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className='Projects'>
          <Project name='Chat App'/>
          <Project name='p2'/>
          <Project name='p3'/>
          <Project name='p4'/>
          <Project name='p5'/>
          <Project name='p6'/>
        </div>
      </div>
    );
  }
}

export default Home;

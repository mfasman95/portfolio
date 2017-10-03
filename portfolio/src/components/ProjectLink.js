import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Project extends Component {
  render() {
    return (
      <Link to={`/projects/${this.props.name}`}>
        <Button className='project-button' bsStyle={this.props.bsStyle || 'primary'} bsSize='large'>
          <img 
            src={this.props.src || 'http://via.placeholder.com/150x150'}
            alt={`Project: ${this.props.name}`}
          />
          <h3>{this.props.name}</h3>
        </Button>
      </Link>
    );
  }
}

export default Project;

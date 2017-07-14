import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Media, Col, Form, ControlLabel, FormControl, Button, FormGroup } from 'react-bootstrap';
import { addCampus, removeCampus } from '../redux/campuses';
import { LinkContainer } from 'react-router-bootstrap';
import { Router } from 'react-router';


class Campuses extends Component {

  constructor(props) {
    super(props);

    this.state = {
        name: '',
        image: '',
        content: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const campus = {
      name: event.target.name.value,
      image: event.target.image.value,
      content: event.target.content.value
    }
    this.props.addCampus(campus);
    event.target.name.value = '';
    event.target.image.value = '';
    event.target.content.value = '';
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form-group">
          <div>
            <h5 style={{float: 'left', marginRight: 10}}>Name</h5>
            <input
              name="name"
              type="text"
              className="form-like large-font"
              placeholder="Enter Campus Name"
              onChange={event => this.setState({ name: event.target.value })}
              style={{height: 30, width: 500}}
            />
          </div>
            <br />
          <div>
            <h5 style={{float: 'left', marginRight: 10}}>Image URL</h5>
            <input
              name="image"
              type="text"
              className="form-like large-font"
              placeholder="Enter Link for Campus Image"
              style={{height: 30, width: 467}}
            />
          </div>
            <br />
          <div>
            <h5 style={{float: 'left', marginRight: 10}}>Description</h5>
            <textarea
              name="content"
              type="textarea"
              className="form-like large-font"
              placeholder="Enter Description of Campus"
              style={{height: 60, width: 466}}
            />
          </div>
                <Button type="submit">
      Create Campus
    </Button>
          </form>
        {this.props.campuses.map(campus => {
          return (
            <Media key={campus.id}>
              <Media.Left>
                <img width={300} height={100} src={campus.image} alt="Image" />
              </Media.Left>
              <Media.Body>
                <Link to={`/campuses/${campus.id}`}>
                  <Media.Heading> {campus.name}</Media.Heading>
                </Link>
                <p>{campus.content.split(' ').slice(0, 40).join(' ')}...</p>
              </Media.Body>
              <Media.Right>
              <Button type="button" bsStyle="danger" onClick={ () => removeCampus(campus.id) }>
              Delete Campus
              </Button>
              </Media.Right>
            </Media>
          )
        })}
      </div>
    )
  }
}

//Container
const mapState = ({ campuses }) => ({ campuses })
const mapDispatch = { addCampus, removeCampus }
export default connect(mapState, mapDispatch)(Campuses)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCampus } from '../redux/campuses';
import { Media, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Campus extends Component {
  render() {
    const { campus, removeCampus } = this.props
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
          <Button type="button" bsStyle="danger" onClick={() => removeCampus(campus.id)}>
            Delete Campus
              </Button>
        </Media.Right>
      </Media>
    )
  }
}

const mapState = null;
const mapDispatch = { removeCampus };

export default connect(mapState, mapDispatch)(Campus)

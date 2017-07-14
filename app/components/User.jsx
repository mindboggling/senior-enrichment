import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeUser } from '../redux/users';
import { Media, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class User extends Component {
  render() {
    const { user, removeUser } = this.props
    return (
      <Media>
        <Media.Left>

          <Link to={`/users/${user.id}`}>
            <Media.Heading> {user.name}</Media.Heading>
          </Link>
        </Media.Left>
        <Media.Body>
          <p>{user.email}</p>
        </Media.Body>
        <Media.Right>
          <Button type="button" bsStyle="danger" onClick={() => removeUser(user.id)}>
            Delete Student
              </Button>
        </Media.Right>
      </Media>
    )
  }
}

const mapState = null;
const mapDispatch = { removeUser };

export default connect(mapState, mapDispatch)(User)

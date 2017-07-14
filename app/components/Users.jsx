import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { addUser } from '../redux/users';
import { Router } from 'react-router';
import User from './User';


class Users extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = {
      name: event.target.name.value,
      email: event.target.email.value,
      campus_id: event.target.campus.value
    }
    this.props.addUser(user);
    event.target.name.value = '';
    event.target.email.value = '';
    event.target.campus.value = '';
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form-group">
          <div>
            <h5 style={{ float: 'left', marginRight: 10 }}>Name</h5>
            <input
              name="name"
              type="text"
              className="form-like large-font"
              placeholder="Enter Student Name"
              style={{ height: 30, width: 500 }}
            />
          </div>
          <br />
          <div>
            <h5 style={{ float: 'left', marginRight: 10 }}>Email</h5>
            <input
              name="email"
              type="email"
              className="form-like large-font"
              placeholder="Enter Valid Email"
              style={{ height: 30, width: 467 }}
            />
          </div>
          <br />
          <select name="campus" defaultValue="" style={{ display: 'block' }} required>
            <option value="" disabled>Select Campus</option>
            {
              this.props.campuses.map(newCampus => (
                <option key={newCampus.id} value={newCampus.id}>{newCampus.name}</option>
              ))
            }
          </select>
          <br />
          <Button type="submit">
            Create Student
          </Button>
        </form>
        {
          this.props.users
            .map(user => <User user={user} key={user.id} />)
        }
      </div>
    )
  }
}

//Container
const mapState = ({ users, campuses }) => ({ users, campuses })
const mapDispatch = { addUser }
export default connect(mapState, mapDispatch)(Users)

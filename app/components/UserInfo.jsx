import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { fetchUser, updateUser } from '../redux/users';
import { fetchCampus } from '../redux/campuses'
import { connect } from 'react-redux';
import User from './User';
import Campus from './Campus';

class UserInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: '',
        email: ''
      }
    }
    this.userUpdate = this.userUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchUserData();
  }

  componentWillReceiveProps(newProps) {

    if (newProps.match.params.id !== this.props.match.params.id) {
      this.props.fetchUserData();
    }
    this.setState({
      user: newProps.user
    });
  }

  render() {
    const { campuses } = this.props
    const user = this.state.user;
    if (!user) return <div />
    return (
      <Grid>
        <User user={user} />
        <Row className="show-grid">
          <Col md={12}>
            <form className="form-group">
              <div>
                <h5 style={{ float: 'left', marginRight: 10 }}>Edit Name</h5>
                <input
                  name="name"
                  type="text"
                  className="form-like large-font"
                  onChange={event => this.setState({ name: event.target.value })}
                  style={{ height: 30, width: 500 }}
                  value={user.name}
                  onChange={event => this.userUpdate({ name: event.target.value })}
                />
              </div>
              <br />
              <div>
                <h5 style={{ float: 'left', marginRight: 10 }}>Edit Email</h5>
                <input
                  name="email"
                  type="text"
                  className="form-like large-font"
                  style={{ height: 30, width: 500 }}
                  value={user.email}
                  onChange={event => this.userUpdate({ email: event.target.value })}
                />
              </div>
            </form>
            {
              campuses
                .filter(campus => campus.id === user.campus_id)
                .map(campus => <Campus campus={campus} key={campus.id} />)
            }
            <div key={'divKey: ' + user.id}>
              <form onSubmit={this.handleSubmit} className="form-group">
                <select name="campus" defaultValue="" required>
                  <option value="" disabled>Select Campus</option>
                  {
                    this.props.campuses.map(newCampus => (
                      <option key={newCampus.id} value={newCampus.id}>{newCampus.name}</option>
                    ))
                  }
                </select>
                <Button name="user" value={user.id} bsStyle="success" type="submit" style={{ marginLeft: 20 }}>
                  Transfer Campus
          </Button>
              </form>
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }

  userUpdate(userData) {
    const { user } = this.state;
    this.setState({
      user: Object.assign(user, userData)
    })
    this.props.updateUserData(user.id, userData);
  }

  handleSubmit(event) {
    event.preventDefault();
    const campus_id = event.target.campus.value;
    const user = { campus_id };
    const id = event.target.user.value;
    this.props.updateUserData(id, user);
    this.props.fetchCampusData(campus_id)
  }

}


const mapState = ({ users, campuses }, ownProps) => {
  const user = users.find((el) => el.id === Number(ownProps.match.params.id))
  return { user, campuses };
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    fetchUserData: () => {
      const userId = ownProps.match.params.id
      dispatch(fetchUser(userId));
    },
    updateUserData: (...userData) => {
      dispatch(updateUser(...userData));
    },
    fetchCampusData: (id) => {
      dispatch(fetchCampus(id));
    }
  }
}

export default connect(mapState, mapDispatch)(UserInfo)

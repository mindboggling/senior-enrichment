import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { fetchCampus, updateCampus } from '../redux/campuses';
import { updateUser, fetchUsers } from '../redux/users'
import { connect } from 'react-redux';
import User from './User';
import Campus from './Campus';

class CampusInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      campus: {
        name: '',
        image: '',
        content: ''
      }
    }
    this.campusUpdate = this.campusUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchCampusData();
    this.props.fetchUsersData();
  }

  componentWillReceiveProps(newProps) {

    if (newProps.match.params.id !== this.props.match.params.id) {
      this.props.fetchCampusData();
    }
    this.setState({
      campus: newProps.campus
    });
  }

  render() {
    const campus = this.state.campus;
    return (
      <Grid>
        <Row className="show-grid">
          <Col md={12}>
            <form onSubmit={this.handleSubmit} className="form-group">
              <div>
                <h5 style={{ float: 'left', marginRight: 10 }}>Edit Name</h5>
                <input
                  name="name"
                  type="text"
                  className="form-like large-font"
                  onChange={event => this.setState({ name: event.target.value })}
                  value={campus.name}
                  onChange={event => this.campusUpdate({ name: event.target.value })}
                  style={{ height: 30, width: 500 }}
                />
              </div>
              <br />
              <div>
                <h5 style={{ float: 'left', marginRight: 10 }}>Edit Image URL</h5>
                <input
                  name="image"
                  type="text"
                  className="form-like large-font"
                  value={campus.image}
                  onChange={event => this.campusUpdate({ image: event.target.value })}
                  style={{ height: 30, width: 467 }}
                />
              </div>
              <br />
              <div>
                <h5 style={{ float: 'left', marginRight: 10 }}>Edit Campus Description</h5>
                <textarea
                  name="content"
                  type="textarea"
                  className="form-like large-font"
                  value={campus.content}
                  onChange={event => this.campusUpdate({ content: event.target.value })}
                  style={{ height: 200, width: 800 }}
                />
              </div>
              <br />
            </form>
          </Col>
          <img height={200} width={500} className="img-responsive center-block" src={campus.image} />
          <br />
          <br />
          <br />
          <br />
          <h3 style={{ textAlign: 'center' }}>Students in this Campus</h3>
          {
            this.props.users
              .filter(user => user.campus_id === campus.id)
              .map(user => {
                return (
                  <div key={'divKey: ' + user.id}>
                    <form onSubmit={this.handleSubmit} className="form-group">
                      <User user={user} key={user.id} />
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
                )
              })}
        </Row>
      </Grid>
    )
  }
  campusUpdate(campusData) {
    const { campus } = this.state;
    this.setState({
      campus: Object.assign(campus, campusData)
    })
    this.props.updateCampusData(campus.id, campusData);
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = {
      campus_id: event.target.campus.value
    }
    const id = event.target.user.value;
    this.props.updateStudentCampus(id, user);
  }
}


const mapState = ({ campuses, users }, ownProps) => {
  const campus = campuses.find((el) => el.id === Number(ownProps.match.params.id))
  return { campus, users, campuses };
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    fetchCampusData: () => {
      const campusId = ownProps.match.params.id
      dispatch(fetchCampus(campusId));
    },
    fetchUsersData: () => {
      dispatch(fetchUsers());
    },
    updateCampusData: (...campusData) => {
      dispatch(updateCampus(...campusData));
    },
    updateStudentCampus: (id, userData) => {
      dispatch(updateUser(id, userData));
    }
  }
}

export default connect(mapState, mapDispatch)(CampusInfo)

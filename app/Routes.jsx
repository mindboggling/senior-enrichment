import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import Root from './components/Root';
import Home from './components/Home';
import history from './history';
import Campuses from './components/Campuses';
import CampusInfo from './components/CampusInfo';
import Users from './components/Users';
import UserInfo from './components/UserInfo';
import { fetchCampuses } from './redux/campuses';
import { fetchUsers } from './redux/users';

class Routes extends Component {

  componentDidMount() {
    this.props.fetchInitialData();
  }

  render() {
    return (
      <Router history={history}>
        <Root>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/campuses" component={Campuses} />
            <Route path="/campuses/:id" component={CampusInfo} />
            <Route exact path="/users" component={Users} />
            <Route path="/users/:id" component={UserInfo} />
            <Route component={Home} />
          </Switch>
        </Root>
      </Router>
    )
  }
}

const mapProps = null;

const mapDispatch = dispatch => ({
  fetchInitialData: () => {
    dispatch(fetchCampuses());
    dispatch(fetchUsers());
  }
})

export default connect(mapProps, mapDispatch)(Routes);

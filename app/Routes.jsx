import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import Root from './components/Root';
import Home from './components/Home';
import history from './history';
import Campuses from './components/Campuses';
import Campus from './components/Campus'
import { fetchCampuses } from './redux/campuses';

class Routes extends Component {

  componentDidMount () {
    this.props.fetchInitialData();
  }

  render() {
    return (
      <Router history={history}>
        <Root>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/campuses" component={Campuses} />
            <Route path="/campuses/:id" component={Campus} />
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
  }
})

export default connect(mapProps, mapDispatch)(Routes);

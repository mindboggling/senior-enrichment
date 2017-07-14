import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { fetchCampus } from '../redux/campuses';
import { connect } from 'react-redux';

class Campus extends Component {

  constructor(props) {
    super(props);
    this.state = { campus: {} }
  }

  componentDidMount() {
    console.log(this.props.fetchCampusData());
  }

  componentWillReceiveProps(newProps) {
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
      <h1 className="text-center">{campus.name}</h1>
      <br />
      </Col>
      <img height={200} width={500} className="img-responsive center-block" src={campus.image} />
      <br />
      <br />
      <span className="text-center">{campus.content}</span>
    </Row>
  </Grid>
  )
  }
}


const mapState = ({campuses}, ownProps) => {
 const campus = campuses.find((el) => el.id === Number(ownProps.match.params.id))
 return {campus};
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    fetchCampusData: () => {
      const campusId = ownProps.match.params.id
      dispatch(fetchCampus(campusId));
    }
  }
}

export default connect(mapState, mapDispatch)(Campus)

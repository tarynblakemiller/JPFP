import React from "react";
import { connect } from "react-redux";
import { getSingleRobot } from "../redux/robots";
import axios from "axios";

class SingleRobot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      robot: null,
    };
  }
  async componentDidMount() {
    const robotId = this.props.match.params.robotId;
    const response = await axios.get(`/api/robots/${robotId}`);
    this.setState({ robot: response.data });
  }
  render() {
    const robot = this.props;
    return (
      <div className="single-robot">
        <h3 className="center">{robot.name}></h3>
        <img src={robot.imageUrl} />
        <div>Fuel Type: {robot.fuelType}</div>
        <div>Fuel Level: {robot.fuelLevel}</div>
      </div>
    );
  }
}

const mapState = (state) => ({
  robot: state.singleRobot,
});

const mapDispatch = (dispatch) => ({
  getSingleRobot: (id) => dispatch(getSingleRobot(id)),
});

export default connect(mapState, mapDispatch)(SingleRobot);

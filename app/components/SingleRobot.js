import React from "react";
import { connect } from "react-redux";
import { getSingleRobot } from "../redux/singleRobot";

class SingleRobot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getSingleRobotThunk(this.props.match.params.id);
  }
  render() {
    const { robot } = this.props;
    return (
      <div>
        <main>
          <h1>{robot.name}</h1>
          <img src={robot.imageUrl}></img>
          <h4>{robot.fuelType}</h4>
          <h4>{robot.fuelLevel}</h4>
        </main>
      </div>
    );
  }
}

const mapState = (state) => ({
  robot: state.robot,
});

const mapDispatch = (dispatch) => ({
  getSingleRobotThunk: (id) => dispatch(getSingleRobot(id)),
});

export default connect(mapState, mapDispatch)(SingleRobot);

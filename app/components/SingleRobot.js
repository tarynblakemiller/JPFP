import React from "react";
import { connect } from "react-redux";
import { getSingleRobotThunk } from "../redux/singleRobot";

class SingleRobot extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.gotSingleRobot(this.props.match.params.robotId);
  }
  render() {
    const robot = this.props.robot;
    const projects = robot ? this.props.robot.projects : [];
    return (
      <div>
        <div>{robot.name}</div>
        <img src={robot.imageUrl} />
        <h5>{robot.fuelLevel}</h5>
        <h3>{robot.fuelType}</h3>
        <h4>Robot's Projects</h4>
        {projects &&
          projects.map((project) => {
            return (
              <div className="project" key={project.id}>
                <div>Title: {project.title}</div>
                <div>Deadline: {project.deadline}</div>
              </div>
            );
          })}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    robot: state.robot,
  };
};

const mapDispatch = (dispatch) => ({
  gotSingleRobot: (id) => dispatch(getSingleRobotThunk(id)),
});

export default connect(mapState, mapDispatch)(SingleRobot);

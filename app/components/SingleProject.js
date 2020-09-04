import React from "react";
import { connect } from "react-redux";
import { getSingleProjectThunk } from "../redux/singleProject";

class SingleProject extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.gotSingleProject(this.props.match.params.projectId);
  }
  render() {
    const project = this.props.project;
    const robots = project ? this.props.project.robots : [];
    return (
      <div>
        <div>{project.title}</div>
        <h5>{project.deadline}</h5>
        <h3>{project.priority}</h3>
        <h4>Projects Assigned To</h4>
        {robots &&
          robots.map((robot) => {
            return (
              <div className="robot" key={robot.id}>
                <div>Task Assigned To: {robot.name}</div>
              </div>
            );
          })}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    project: state.project,
  };
};

const mapDispatch = (dispatch) => ({
  gotSingleProject: (id) => dispatch(getSingleProjectThunk(id)),
});

export default connect(mapState, mapDispatch)(SingleProject);

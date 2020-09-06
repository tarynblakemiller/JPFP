import React from "react";
import { connect } from "react-redux";
import { getSingleProjectThunk } from "../redux/singleProject";
import { Link } from "react-router-dom";

class SingleProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  componentDidMount() {
    this.props.gotSingleProject(this.props.match.params.projectId);
  }
  renderRobots = () => {
    const project = this.props.project;
    const robots = project ? this.props.project.robots : [];
    if (!robots || robots.length <= 0) {
      return "There are currently no robots currently assigned";
    }
    return robots.map((robot) => {
      return (
        <div className="robot" key={robot.id}>
          <Link to={`/robots/${robot.id}`}>{robot.name}</Link>
        </div>
      );
    });
  };
  render() {
    const project = this.props.project;
    const robots = project ? this.props.project.robots : [];
    return (
      <div>
        <div>{project.title}</div>
        <h5>{project.deadline}</h5>
        <h3>{project.priority}</h3>
        <h2>{project.description}</h2>
        <h4>Projects Assigned To</h4>
        {this.renderRobots()}
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

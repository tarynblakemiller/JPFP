import React from "react";
import { connect } from "react-redux";
import { getSingleRobotThunk } from "../redux/singleRobot";
import { Link } from "react-router-dom";
import EditRobot from "./EditRobot";

class SingleRobot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
    };
    this.hideForm = this.hideForm.bind(this);
  }

  hideForm() {
    this.setState({
      showForm: !this.state.showForm,
    });
  }

  componentDidMount() {
    this.props.gotSingleRobot(this.props.match.params.robotId);
  }

  renderProjects = () => {
    const robot = this.props.robot;
    const projects = robot ? this.props.robot.projects : [];
    if (!projects || projects.length <= 0) {
      return "There are currently no projects assigned";
    }
    return projects.map((project) => {
      return (
        <div className="project" key={project.id}>
          <Link to={`/projects/${project.id}`}>
            {project.title}
            <div>Deadline: {project.deadline}</div>
          </Link>
        </div>
      );
    });
  };
  render() {
    const robot = this.props.robot;
    const projects = robot ? this.props.robot.projects : [];
    const { showForm } = this.state;
    return (
      <div>
        <div>{robot.name}</div>
        <img src={robot.imageUrl} />
        <h5>{robot.fuelLevel}</h5>
        <h3>{robot.fuelType}</h3>
        {showForm && <EditRobot robot={robot} />}
        <button onClick={() => this.hideForm()}>Edit</button>
        <h4>Robot's Projects</h4>
        {this.renderProjects()}
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

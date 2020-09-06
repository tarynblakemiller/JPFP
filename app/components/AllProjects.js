import React from "react";
import { connect } from "react-redux";
import { fetchProjects } from "../redux/projects";
import { Link } from "react-router-dom";

class AllProjects extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {};
  }
  componentDidMount() {
    this.props.getProjects();
  }
  render() {
    const { projects } = this.props;
    return (
      <div>
        <Link to="/project/new">
          <button>Add Project</button>
        </Link>
        {projects &&
          projects.map((project) => {
            return (
              <div className="project" key={project.id}>
                <Link to={`/projects/${project.id}`}>
                  {project.title}
                  <div>Deadline: {project.deadline}</div>
                </Link>
              </div>
            );
          })}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    projects: state.projects,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getProjects: () => dispatch(fetchProjects()),
  };
};

export default connect(mapState, mapDispatch)(AllProjects);

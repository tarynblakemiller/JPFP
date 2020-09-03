import React from "react";
import { connect } from "react-redux";
import { fetchProjects } from "../redux/projects";

// Notice that we're exporting the AllProjects component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
class AllProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getProjects();
  }
  render() {
    const { projects } = this.props;
    return (
      <div>
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
    projects: state.projects,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getProjects: () => dispatch(fetchProjects()),
  };
};

export default connect(mapState, mapDispatch)(AllProjects);

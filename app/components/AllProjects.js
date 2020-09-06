import React from "react";
import { connect } from "react-redux";
import { fetchProjects } from "../redux/projects";
import { Link } from "react-router-dom";
import { Form2 } from "./ProjectForm";

class AllProjects extends React.Component {
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
    this.props.getProjects();
  }
  render() {
    const { showForm } = this.state;
    const { projects } = this.props;
    return (
      <div>
        {showForm && <Form2 />}
        <button onClick={() => this.hideForm("showForm")}>Add Project</button>
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

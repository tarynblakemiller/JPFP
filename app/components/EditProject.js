import React from "react";
import { connect } from "react-redux";
import { updateProjectThunk } from "../redux/singleProject";

class EditProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.project.name || "",
      completed: props.project.completed || false,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const id = this.props.project.id;
    const { title } = this.state;
    const data = { title };
    this.props.updateProject(id, data);
  };
  render() {
    const { title } = this.state;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">Save Changes:</button>
      </form>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    updateProject: (id, project) => dispatch(updateProjectThunk(id, project)),
  };
};

export default connect(null, mapDispatch)(EditProject);

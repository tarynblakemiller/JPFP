import React from "react";
import { connect } from "react-redux";
import { createProjectThunk } from "../redux/singleProject";

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { title } = this.state;
    this.props.createProject(title);
    this.setState({ title: "" });
  };
  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    createProject: (title) => dispatch(createProjectThunk(title)),
  };
};

export const Form2 = connect(null, mapDispatch)(ProjectForm);

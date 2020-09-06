import React from "react";
import { connect } from "react-redux";
import { createRobotThunk } from "../redux/singleRobot";

class RobotForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      fuelType: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { name, fuelType } = this.state;
    this.props.createRobot(name, fuelType);
    this.setState({ name: "", fuelType: "" });
  };
  render() {
    const { name, fuelType } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <label htmlFor="fuelType">Fuel Type:</label>
          <input
            type="text"
            name="fuelType"
            value={fuelType}
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
    createRobot: (name, fuelType) => dispatch(createRobotThunk(name, fuelType)),
  };
};

export const Form = connect(null, mapDispatch)(RobotForm);

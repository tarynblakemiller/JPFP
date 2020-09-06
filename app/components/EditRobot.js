import React from "react";
import { connect } from "react-redux";
import { updateRobotThunk } from "../redux/singleRobot";

class EditRobot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.robot.name || "",
      fuelType: props.robot.fuelType || "",
      fuelLevel: props.robot.fuelLevel,
      imageUrl: props.robot.imageUrl || "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const id = this.props.robot.id;
    const { name, fuelType, fuelLevel, imageUrl } = this.state;
    const data = { name, fuelType, fuelLevel, imageUrl };
    this.props.updateRobot(id, data);
  };
  render() {
    const { name, fuelType, fuelLevel, imageUrl } = this.state;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
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
          <label htmlFor="fuelLevel">Fuel Level:</label>
          <input
            type="number"
            name="fuelLevel"
            value={fuelLevel}
            onChange={this.handleChange}
          />
          <label htmlFor="imageUrl">imageUrl:</label>
          <input
            type="text"
            name="imageUrl"
            value={imageUrl}
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
    updateRobot: (id, robot) => dispatch(updateRobotThunk(id, robot)),
  };
};

export default connect(null, mapDispatch)(EditRobot);

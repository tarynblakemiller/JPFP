import React from "react";
import { connect } from "react-redux";
import { fetchRobots } from "../redux/robots";
import { Link } from "react-router-dom";
import { deleteRobotThunk } from "../redux/robots";
import { Form } from "./RobotForm";

class AllRobots extends React.Component {
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
    this.props.getRobots();
  }

  render() {
    const { showForm } = this.state;
    const { robots } = this.props;
    return (
      <div>
        {showForm && <Form />}
        <header>
          <button onClick={() => this.hideForm()}>Add Robot</button>
        </header>
        {robots &&
          robots.map((robot) => {
            return (
              <div className="all-robots" key={robot.id} robot={robot}>
                <button onClick={() => this.props.deleteRobot(robot.id)}>
                  X
                </button>
                <Link to={`/robots/${robot.id}`} className="button">
                  <div className="name">{robot.name}</div>
                  <img src={robot.imageUrl} />
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
    robots: state.robots,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getRobots: () => {
      dispatch(fetchRobots());
    },
    deleteRobot: (id) => {
      dispatch(deleteRobotThunk(id));
    },
  };
};

export default connect(mapState, mapDispatch)(AllRobots);

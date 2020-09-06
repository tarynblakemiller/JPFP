import React from "react";
import { connect } from "react-redux";
import { fetchRobots } from "../redux/robots";
import { Link } from "react-router-dom";
import { deleteRobotThunk } from "../redux/singleRobot";

class AllRobots extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {};
  }

  componentDidMount() {
    this.props.getRobots();
  }

  render() {
    const { robots } = this.props;
    return (
      <div>
        <header>
          Employees View
          <Link to="/robot/new">
            <button>Add Robot</button>
          </Link>
        </header>
        {robots &&
          robots.map((robot) => {
            return (
              <div key={robot.id} robot={robot}>
                <button>Edit</button>
                <button onClick={this.props.deleteRobot(robot.id)}>X</button>
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

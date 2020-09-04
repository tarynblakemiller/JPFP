import React from "react";
import { connect } from "react-redux";
import { fetchRobots } from "../redux/robots";
import { Link } from "react-router-dom";

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
        <h2>Employees {console.log(this.props)}</h2>
        {robots &&
          robots.map((robot) => {
            return (
              <div key={robot.id}>
                <Link to={`/robots/${robot.id}`} className="button">
                  <div className="name">{robot.name}</div>
                  <img src={robot.imageUrl} />
                </Link>
                <div>{this.props.children}</div>
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
  };
};

export default connect(mapState, mapDispatch)(AllRobots);

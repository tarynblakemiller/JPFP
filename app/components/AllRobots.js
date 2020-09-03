import React from "react";
import { connect } from "react-redux";
import { fetchRobots } from "../redux/robots";

// Notice that we're exporting the AllRobots component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.

class AllRobots extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getRobots();
  }
  render() {
    const { robots } = this.props;
    console.log(this.props);
    return (
      <div>
        {robots &&
          robots.map((robot) => {
            return (
              <div className="robot" key={robot.id}>
                <h4 className="center">{robot.name}</h4>
                <div>
                  <img src={robot.imageUrl} />
                </div>
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

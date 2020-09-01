import React from "react";
import { connect } from "react-redux";

// Notice that we're exporting the AllRobots component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllRobots extends React.Component {
  componentDidMount() {
    this.props.getRobots();
  }
  render() {
    const robots = this.props.robots;
    return (
      <div>
        <ul className="robot-list">
          {robots.map((robot) => {
            return (
              <div key={robot.id}>
                <p>{robot.name}</p>
                <img src={robot.imageUrl} />
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapState = () => {
  return {};
};

const mapDispatch = () => {
  return {};
};

export default connect(mapState, mapDispatch)(AllRobots);

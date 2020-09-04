import React from "react";
import { connect } from "../../server/api/robots";

class RobotForm extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <h3>Add Robot</h3>
        <form>
          <input type="text"></input>
          <button>Add Robot</button>
        </form>
      </div>
    );
  }
}


export default connect(mapState, mapDispatch)() AddRobotForm

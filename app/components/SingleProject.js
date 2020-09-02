import React from "react";
import { connect } from "../../server";

class SingleProject extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getSingleProject(this.props.match.params.id);
  }
}

export default connect(mapState, mapDispatch)(SingleProject);

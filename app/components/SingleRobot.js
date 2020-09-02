import React from 'react'
import {getSingleRobot} from '../redux/robots'


class SingleRobot extends React.Component {
    constructor(props) {
      super(props)
    }
    componentDidMount() {
      this.props.getSingleRobot(this.props.match.params.id)
    }
    render() {
      return ()
    }
}

const mapState = (state) => {
  robot: state.singleRobot
}


export default SingleRobot

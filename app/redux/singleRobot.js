import axios from "axios";

//acton type
export const GET_SINGLE_ROBOT = "GET_SINGLE_ROBOT";
export const UPDATE_ROBOT = "UPDATE_ROBOT";


//action creator
export const getSingleRobot = (robot) => ({
  type: GET_SINGLE_ROBOT,
  robot,
});

export const updateRobot = (robot) => ({
  type: UPDATE_ROBOT,
  robot,
});



//thunk creator
export const getSingleRobotThunk = (id) => async (dispatch) => {
  const response = await axios.get(`/api/robots/${id}`);
  dispatch(getSingleRobot(response.data));
};

export const updateRobotThunk = (id) => async (dispatch) => {
  const response = await axios.put(`/api/robots/${id}`);
  dispatch(updateRobot(response.data));
};


const initialState = {};

const singleRobotReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SINGLE_ROBOT:
      return action.robot;

    case UPDATE_ROBOT:
      return { ...state, robot: action.robot };
  

    default:
      return state;
  }
};

export default singleRobotReducer;

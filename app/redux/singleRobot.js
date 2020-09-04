import axios from "axios";

//acton type
export const GET_SINGLE_ROBOT = "GET_SINGLE_ROBOT";
export const UPDATE_ROBOT = "UPDATE_ROBOT";
export const DELETE_ROBOT = "DELETE_ROBOT";

//action creator
export const getSingleRobot = (robot) => ({
  type: GET_SINGLE_ROBOT,
  robot,
});

export const updateRobot = (robot) => ({
  type: UPDATE_ROBOT,
  robot,
});

export const deleteRobot = (robot) => ({
  type: DELETE_ROBOT,
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

export const deleteRobotThunk = (id) => async (dispatch) => {
  const response = await axios.delete(`/api/robots/${id}`);
  dispatch(deleteRobot(response.data));
};

const initialState = {};

const singleRobotReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SINGLE_ROBOT:
      return action.robot;
    case UPDATE_ROBOT:
      return action.robot;
    case DELETE_ROBOT:
      return initialState;
    default:
      return state;
  }
};

export default singleRobotReducer;

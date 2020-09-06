import axios from "axios";

//action types

export const SET_ROBOTS = "SET_ROBOTS";
export const FETCH_ROBOTS = "FETCH_ROBOTS";
export const ADD_NEW_ROBOT = "ADD_NEW_ROBOT";
export const DELETE_ROBOT = "DELETE_ROBOT";

//action creators

export const setRobots = (robots) => {
  return { type: SET_ROBOTS, robots };
};

export const addNewRobot = (robot) => ({
  type: ADD_NEW_ROBOT,
  robot: robot,
});

export const createRobotThunk = (name, fuelType) => async (dispatch) => {
  const response = await axios.post(`/api/robots/`, { name, fuelType });
  dispatch(addNewRobot(response.data));
};

export const deleteRobot = (id) => ({
  type: DELETE_ROBOT,
  id,
});

//thunk creators
export const fetchRobots = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/api/robots");
      dispatch(setRobots(response.data));
    } catch (err) {
      console.error(err);
    }
  };
};

export const deleteRobotThunk = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(`/api/robots/${id}`);
    dispatch(deleteRobot(id));
  } catch (error) {
    console.error(error);
  }
};

const initialState = [];

export default function robotsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ROBOTS:
      return action.robots;
    case ADD_NEW_ROBOT:
      return [...state, action.robot];
    case DELETE_ROBOT:
      return state.filter((robot) => robot.id !== action.id);
    default:
      return state;
  }
}

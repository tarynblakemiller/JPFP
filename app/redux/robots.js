import axios from "axios";

//action types

export const SET_ROBOTS = "SET_ROBOTS";
export const FETCH_ROBOTS = "FETCH_ROBOTS";
export const GET_SINGLE_ROBOT = "GET_SINGLE_ROBOT";

//action creators

export const setRobots = (robots) => {
  return { type: SET_ROBOTS, robots };
};

export const singleRobot = (id) => {
  return {
    type: "GET_SINGLE_ROBOT",
    id,
  };
};

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

const initialState = [];

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function robotsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ROBOTS:
      return action.robots;
    default:
      return state;
  }
}

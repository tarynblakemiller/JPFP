import axios from "axios";

const initialState = [];

//action types

export const SET_ROBOTS = "SET_ROBOTS";
export const FETCH_ROBOTS = "FETCH_ROBOTS";

//action creators

export const setRobots = (robots) => {
  return { type: SET_ROBOTS, robots };
};

//thunk creator
export const fetchRobots = () => {
  return async (dispatch) => {
    const { data: allRobots } = await axios.get("/api/robots");
    dispatch(setRobots(allRobots));
  };
};

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

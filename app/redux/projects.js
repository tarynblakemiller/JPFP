import axios from "axios";

export const SET_PROJECTS = "SET_PROJECTS";
export const FETCH_PROJECTS = "FETCH_PROJECTS";

export const setProjects = (projects) => {
  return { type: SET_PROJECTS, projects };
};

// export const getProjects = () => async (dispatch) => {
//   try {
//     const { data } = await axios.get("/api/projects");
//     dispatch(setProjects(data));
//   } catch (err) {
//     console.error(err);
//   }
// };

export const fetchProjects = () => {
  return async (dispatch) => {
    const response = await axios.get("/api/projects");
    dispatch(setProjects(response.data));
  };
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers

const initialState = [];

export default function projectsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PROJECTS:
      return action.projects;
    default:
      return state;
  }
}

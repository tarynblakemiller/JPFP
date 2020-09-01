import axios from "axios";

const GET_PROJECTS = "GET_PROJECTS";
const SET_PROJECTS = "SET_PROJECTS";

export const setProjects = (projects) => {
  return { type: SET_PROJECTS, projects };
};

export const fetchProjects = () => {
  return async (dispatch) => {
    const { data } = await axios.get("/api/projects");
    dispatch(fetchProjects(data));
  };
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers

const initialProjects = [
  {
    title: "",
    deadline: "",
  },
];
export default function projectsReducer(state = initialProjects, action) {
  switch (action.type) {
    default:
      return state;
  }
}

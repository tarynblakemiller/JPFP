import axios from "axios";

export const SET_PROJECTS = "SET_PROJECTS";
export const FETCH_PROJECTS = "FETCH_PROJECTS";
export const ADD_NEW_PROJECT = "ADD_NEW_PROJECT";
export const DELETE_PROJECT = "DELETE_PROJECT";

export const setProjects = (projects) => {
  return { type: SET_PROJECTS, projects };
};

export const addNewProject = (project) => ({
  type: ADD_NEW_PROJECT,
  project: project,
});

export const deleteProject = (id) => ({
  type: DELETE_PROJECT,
  id,
});

export const fetchProjects = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/api/projects");
      dispatch(setProjects(response.data));
    } catch (err) {
      console.error(err);
    }
  };
};

export const createProjectThunk = (title) => async (dispatch) => {
  const response = await axios.post(`/api/projects/`, { title });
  dispatch(addNewProject(response.data));
};

export const deleteProjectThunk = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(`/api/projects/${id}`);
    dispatch(deleteProject(id));
  } catch (error) {
    console.error(error);
  }
};

const initialState = [];

export default function projectsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PROJECTS:
      return action.projects;
    case ADD_NEW_PROJECT:
      return [...state, action.project];
    case DELETE_PROJECT:
      return state.filter((project) => project.id !== action.id);
    default:
      return state;
  }
}

import axios from "axios";

//acton type
export const GET_SINGLE_PROJECT = "GET_SINGLE_PROJECT";
export const ADD_NEW_PROJECT = "ADD_NEW_PROJECT";
export const UPDATE_PROJECT = "UPDATE_PROJECT";
export const DELETE_PROJECT = "DELETE_PROJECT";

//action creator
export const getSingleProject = (project) => ({
  type: GET_SINGLE_PROJECT,
  project,
});

export const addNewProject = (project) => ({
  type: ADD_NEW_PROJECT,
  project: project,
});

export const updateProject = (project) => ({
  type: UPDATE_PROJECT,
  project,
});

export const deleteProject = (project) => ({
  type: DELETE_PROJECT,
  project,
});

//thunk creator
export const getSingleProjectThunk = (id) => async (dispatch) => {
  const response = await axios.get(`/api/projects/${id}`);
  dispatch(getSingleProject(response.data));
};

export const createProjectThunk = (title) => async (dispatch) => {
  const response = await axios.post(`/api/projects/`, { title });
  dispatch(addNewProject(response.data));
};

export const updateProjectThunk = (id) => async (dispatch) => {
  const response = await axios.put(`/api/robots/${id}`);
  dispatch(updateProject(response.data));
};

export const deleteProjectThunk = (id) => async (dispatch) => {
  const response = await axios.delete(`/api/robots/${id}`);
  dispatch(deleteProject(response.data));
};

const initialState = {};

const singleProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SINGLE_PROJECT:
      return action.project;
    case ADD_NEW_PROJECT:
      return { ...state, project: {} };
    case UPDATE_PROJECT:
      return action.project;
    case DELETE_PROJECT:
      return initialState;
    default:
      return state;
  }
};

export default singleProjectReducer;

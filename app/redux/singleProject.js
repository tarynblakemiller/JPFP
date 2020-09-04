import axios from "axios";

//acton type
export const GET_SINGLE_PROJECT = "GET_SINGLE_PROJECT";
export const UPDATE_PROJECT = "UPDATE_PROJECT";
export const DELETE_PROJECT = "DELETE_PROJECT";

//action creator
export const getSingleProject = (project) => ({
  type: GET_SINGLE_PROJECT,
  project,
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
    case UPDATE_PROJECT:
      return action.project;
    case DELETE_PROJECT:
      return initialState;
    default:
      return state;
  }
};

export default singleProjectReducer;

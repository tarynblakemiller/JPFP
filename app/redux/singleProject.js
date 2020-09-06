import axios from "axios";

//acton type
export const GET_SINGLE_PROJECT = "GET_SINGLE_PROJECT";
export const UPDATE_PROJECT = "UPDATE_PROJECT";

//action creator
export const getSingleProject = (project) => ({
  type: GET_SINGLE_PROJECT,
  project,
});

export const updateProject = (project) => ({
  type: UPDATE_PROJECT,
  project,
});

export const getSingleProjectThunk = (id) => async (dispatch) => {
  const response = await axios.get(`/api/projects/${id}`);
  dispatch(getSingleProject(response.data));
};

export const updateProjectThunk = (id, data) => async (dispatch) => {
  const response = await axios.put(`/api/projects/${id}`, data);
  dispatch(updateProject(response.data));
};

const initialState = {};

const singleProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SINGLE_PROJECT:
      return action.project;
    case UPDATE_PROJECT:
      return action.project;
    default:
      return state;
  }
};

export default singleProjectReducer;

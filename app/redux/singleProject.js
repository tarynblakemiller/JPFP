import axios from "axios";

//acton type
export const GOT_SINGLE_PROJECT = "GOT_SINGLE_PROJECT";

//action creator
export const gotSingleProject = (project) => ({
  type: GOT_SINGLE_PROJECT,
  project,
});

//thunk creator
export const getSingleProject = (id) => async (dispatch) => {
  const response = await axios.get(`/api/projects/${id}`);
  dispatch(gotSingleProject(response.data));
};

const singleRobotReducer = ((state = intialState), action);

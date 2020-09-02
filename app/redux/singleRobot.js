import axios from "axios";

//acton type
export const GOT_SINGLE_ROBOT = "GOT_SINGLE_ROBOT";

//action creator
export const gotSingleRobot = (robot) => ({
  type: GOT_SINGLE_ROBOT,
  robot,
});

//thunk creator
export const getSingleRobot = (id) => async (dispatch) => {
  const response = await axios.get(`/api/robots/${id}`);
  dispatch(gotSingleRobot(response.data));
};

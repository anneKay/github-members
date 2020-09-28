import actionTypes from '../utils/actionTypes';
import { fetchData } from '../utils/apiUtil';
import { userDetails, getRepo } from '../utils/helper';

 const setMemberDetailSuccess = payload => ({
  type: actionTypes.MEMBER_DETAIL_SUCCESS,
  payload,
})
  
const setMemberDetailFailure = payload => ({
  type: actionTypes.MEMBER_DETAIL_FAILURE,
  payload,
})

export const getUser = (url) => async dispatch => {
  try {
    const response = await fetchData(`https://api.github.com/users${url}`);
    const data = await response.json();
    if (response.ok) {
      dispatch(setMemberDetailSuccess(data));
    } else {
      dispatch(setMemberDetailFailure(data))
    }
    return data;
  } catch(error) {
    dispatch(setMemberDetailFailure(error));
    return error;
  }
}

export const getUserRepo = async (url) => {
  try {
    const response = await fetchData(url);
    return await response.json();
  } catch(error) {
    return error;
  }
};

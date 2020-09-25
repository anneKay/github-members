import actionTypes from '../utils/actionTypes';
import { fetchData } from '../utils/apiUtil';

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
    const response = await fetchData(url);
    const data = response.json();
    if (response.ok) {
      dispatch(setMemberDetailSuccess(data));
      return data;
    }
  } catch(error) {
    dispatch(setMemberDetailFailure(error));
  }
}

export const getUserRepo = async (url) => {
  try {
    const response = await fetchData(url);
    return response.json();
  } catch(error) {
    return error;
  }
};

export const getUserFollow = async (url) => {
  try {
    const response = await fetchData(url);
    return response.json();
  } catch (error) {
    return error;
  }
}
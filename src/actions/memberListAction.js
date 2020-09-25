import actionTypes from '../utils/actionTypes';
import { fetchData } from '../utils/apiUtil';

 const setMemberListSuccess = payload => ({
  type: actionTypes.MEMBER_LIST_SUCCESS,
  payload,
})
  
const setMemberListFailure = payload => ({
  type: actionTypes.MEMBER_LIST_FAILURE,
  payload,
})


export const getMemberList = (history) => async dispatch => {
  try {
    const response = await fetchData();
    const data = response.json();
    if (response.ok) {
      dispatch(setMemberListSuccess(data));
      return data;
    }
  } catch(error) {
    dispatch(setMemberListFailure(error));
  }
}


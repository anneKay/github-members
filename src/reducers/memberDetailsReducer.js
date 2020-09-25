import action from '../utils/actionTypes';

const initialState = {
  data: {},
  error: {}
}
export default (state = initialState, type, payload) => {
  switch(type) {
    case action.MEMBER_DETAIL_SUCCESS:
      return {
        ...state,
        data: payload
      };
    case action.MEMBER_DETAIL_FAILURE:
      return {
        ...state,
        error: payload
      }
      default:
        return state;
  }
};

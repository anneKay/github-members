import action from '../utils/actionTypes';

const initialState = {
  data: {},
  error: {}
}
export default (state = initialState, type, payload) => {
  switch(type) {
    case action.MEMBER_LIST_SUCCESS:
      return {
        ...state,
        data: payload
      };
    case action.MEMBER_LIST_FAILURE:
      return {
        ...state,
        error: payload
      }
      default:
        return state;
  }
};

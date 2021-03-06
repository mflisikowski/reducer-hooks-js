import * as contants from "../constants";

/**
 * 
 * @param {*} state, current user state
 * @param {*} action, action that contains type and payload(?)
 */
export const user = (state, action) => {
  switch (action.type) {
    case contants.USER_SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload.isFetching,
      };
    default:
      return state;
  }
};

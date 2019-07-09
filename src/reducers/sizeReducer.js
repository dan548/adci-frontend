import * as types from '../actions/size/actionTypes';

const initialState = {
  footerWidth: 0,
  footerHeight: 0
};

export default (state = initialState, action) => {
  switch(action.type) {
    case types.SIZE_CHANGED: {
      return {
        ...state,
        footerWidth: action.width,
        footerHeight: action.height
      }
    }
    default: {
      return state;
    }
  }
}
import * as types from './actionTypes';

export default function sendSize(width, height) {
  return (dispatch) => {
    dispatch({
      type: types.SIZE_CHANGED,
      width: width,
      height: height
    });
  }
}
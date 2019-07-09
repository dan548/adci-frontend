import { combineReducers } from "redux";
import { i18nReducer } from 'react-redux-i18n';
import sizeReducer from './sizeReducer';

export default (state = {}, action) => {
  return combineReducers({
    sizeReducer,
    i18n: i18nReducer
  })(state, action);
}
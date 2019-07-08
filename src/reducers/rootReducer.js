import { combineReducers } from "redux";
import { i18nReducer } from 'react-redux-i18n';

export default (state = {}, action) => {
  return combineReducers({
    i18n: i18nReducer
  })(state, action);
}
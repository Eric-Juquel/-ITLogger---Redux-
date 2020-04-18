import { combineReducers } from 'redux';
import logReducer from './logreducer';
import techReducer from './techReducer';


export default combineReducers({
  log: logReducer,
  tech: techReducer
});
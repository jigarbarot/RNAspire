import {combineReducers} from 'redux';
import auth from './auth';
import debitCard from './debitCard';

const AppReducer = combineReducers({
  auth,
  debitCard,
});

export default AppReducer;

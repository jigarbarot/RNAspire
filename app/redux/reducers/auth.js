import {AUTH_LOADER} from '../actions/actionType';

const initState = {authLoader: true};

const auth = (state = initState, action) => {
  switch (action.type) {
    case AUTH_LOADER:
      return {...state, authLoader: action.payload};
    default:
      return state;
  }
};

export default auth;

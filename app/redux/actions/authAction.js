import {AUTH_LOADER} from './actionType';

export function setLoader(isLoading) {
  return {
    type: AUTH_LOADER,
    payload: isLoading,
  };
}

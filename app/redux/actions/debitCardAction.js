import {SHOW_CARD_NUMBER, SET_WEEKLY_CARD_LIMIT} from './actionType';

export function setShowCard(value) {
  return {
    type: SHOW_CARD_NUMBER,
    payload: value,
  };
}

export function setWeeklyLimit(value) {
  return {
    type: SET_WEEKLY_CARD_LIMIT,
    payload: value,
  };
}

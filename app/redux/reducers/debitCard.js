import {SHOW_CARD_NUMBER, SET_WEEKLY_CARD_LIMIT} from '../actions/actionType';

const initState = {
  showCardNumber: false,
  isSetWeeklyLimit: false,
  weeklyLimit: 0,
};
const debitCard = (state = initState, action) => {
  switch (action.type) {
    case SHOW_CARD_NUMBER:
      return {...state, showCardNumber: action.payload};
    case SET_WEEKLY_CARD_LIMIT:
      return {...state, ...action.payload};
    default:
      return state;
  }
};

export default debitCard;

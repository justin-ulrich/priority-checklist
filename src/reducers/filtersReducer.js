import actionTypes from '../actions/actionTypes'
import moment from 'moment';

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.initialize:
      return {
        dueDate: moment().startOf('date').add(30, 'days'),
        overdueOnly: false
      };
    case actionTypes.updateDueDate:
      return Object.assign({}, state, {dueDate: action.dueDate});
    case actionTypes.updateOverdueOnly:
      return Object.assign({}, state, {overdueOnly: action.overdueOnly})
    default:
      return state;
  }
};
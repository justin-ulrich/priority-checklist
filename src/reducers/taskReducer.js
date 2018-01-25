import actionTypes from '../actions/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.updateTaskPriority:
      return Object.assign({}, state, {priority: action.priority});
    case actionTypes.expediteTaskPriority:
      return Object.assign({}, state, {expedited: true});
    default:
      return state;
  }
};
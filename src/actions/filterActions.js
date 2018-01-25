import actionTypes from './actionTypes';

export const initializeFilters = () => {
  return {type: actionTypes.initialize};
};

export const updateDueDate = (dueDate) => {
  return {type: actionTypes.updateDueDate, dueDate};
};

export const updateOverdueOnly = (overdueOnly) => {
  return {type: actionTypes.updateOverdueOnly, overdueOnly}
};
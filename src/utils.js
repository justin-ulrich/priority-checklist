import _ from 'lodash';
import moment from 'moment';

export const getListIndex = (tasks, id) => {
  return _.findIndex(tasks, (task) => {
    return task.id === id;
  });
};

export const getFormattedDate = (days) => {
  return moment().startOf('date').add(days, 'days').toJSON();
};

export const getFilteredList = (tasks, dueDate, overdueOnly) => {
  return _.filter(tasks, task => {
    let result = true;
    if (overdueOnly) {
      result = moment(task.dueDate).isBefore(moment().startOf('date'));
    }
    if (result) {
      result = moment(task.dueDate).isSameOrBefore(dueDate);
    }
    return result;
  });
};
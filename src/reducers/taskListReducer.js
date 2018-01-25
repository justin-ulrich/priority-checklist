import actionTypes from '../actions/actionTypes';
import taskReducer from './taskReducer';

export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.updateTaskList:
      return action.taskList;
    case actionTypes.updateTaskListPriority:
      {
        let priority = 1;
        return state.map((task) => {
          return taskReducer(task, {
            type: actionTypes.updateTaskPriority,
            priority: priority++
          });
        });
      }
    case actionTypes.expediteTaskListPriority:
      {
        return action.taskList.map((task) => {
          if (task.id === action.task.id) {
            return taskReducer(task, {type: actionTypes.expediteTaskPriority});
          }
          return task;
        });
      }
    default:
      return state;
  }
};
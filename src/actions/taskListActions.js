import actionTypes from './actionTypes';
import * as utils from '../utils';
import TaskListApi from '../api/TaskListApi';

const loadListSuccess = (taskList) => {
  return {type: actionTypes.updateTaskList, taskList};
};

export const loadList = () => {
  return (dispatch) => {
    return TaskListApi.get()
      .then((taskList) => {
        dispatch(loadListSuccess(taskList));
      })
      .catch((error) => {
        console.log('TaskListApi.get error: ' + error);
      });
  };
};

export const updateList = (taskList, dragTask, hoverTask) => {
  let newTaskList = taskList.slice();
  const dragIndex = utils.getListIndex(newTaskList, dragTask.id);
  const hoverIndex = utils.getListIndex(newTaskList, hoverTask.id);

  newTaskList.splice(dragIndex, 1);
  newTaskList.splice(hoverIndex, 0, dragTask);
  
  return {type: actionTypes.updateTaskList, taskList: newTaskList};
};

export const expeditePriority = (taskList, task) => {
  let newTaskList = taskList.slice();
  const index = utils.getListIndex(newTaskList, task.id);

  newTaskList.splice(index, 1);
  newTaskList.splice(0, 0, task);

  return {type: actionTypes.expediteTaskListPriority, taskList: newTaskList, task};
};

export const updatePriority = (taskList) => {
  return {type: actionTypes.updateTaskListPriority, taskList};
};

export const addTask = (taskList, task) => {
  let newTaskList = taskList.slice();
  newTaskList = [...newTaskList, task]

  return {type: actionTypes.updateTaskList, taskList: newTaskList};
};
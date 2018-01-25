import {combineReducers} from 'redux';
import filters from './filtersReducer';
import taskList from './taskListReducer';
import task from './taskReducer';

export default combineReducers({
  filters,
  taskList,
  task
});
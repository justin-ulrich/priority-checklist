import {tasks} from '../api/tasks';

export default class TaskListApi {
  static get() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], tasks));
      }, 1000);
    });
  }
}
/* eslint-disable import/no-mutable-exports */
import Task from './taskClass.js';
// Disabling mutable exports to be able to change and reassignt this variable
export let dataBase = [new Task('Description test1', 2, false), new Task('Description test2', 1, false), new Task('Description test3', 0, false)];

export function updateValues() {
  localStorage.setItem('dataBase', JSON.stringify(dataBase));
}

export function loadValues() {
  if (localStorage.getItem('dataBase') !== null) {
    dataBase = JSON.parse(localStorage.getItem('dataBase'));
  }
}

export function changeCompletedState(task) {
  task.completed = !task.completed;
  updateValues();
}

/* Used for reassigning dataBase from other scripts */
export function updateDatabase(data) {
  dataBase = data;
  updateValues();
}

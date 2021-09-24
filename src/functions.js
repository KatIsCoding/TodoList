/* eslint-disable import/no-mutable-exports */
/* eslint-disable no-unused-vars */
import Task from './taskClass.js';
// Disabling mutable exports to be able to change and reassignt this variable
export let dataBase = [];

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

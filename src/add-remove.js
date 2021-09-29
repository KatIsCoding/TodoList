import { dataBase, updateValues, updateDatabase } from './functions.js';

export function addTask(task) {
  dataBase.push(task);
  updateValues();
}

function normalizeIndexes() {
  dataBase.forEach((value, i) => {
    dataBase[i].index = i + 1
  })
  updateValues();
}

export function removeAll() {
  updateDatabase(dataBase.filter((task) => task.completed === false));
  normalizeIndexes();
}

export function removeTask(taskIndex) {
  dataBase.splice(taskIndex - 1, 1);
  normalizeIndexes();
}
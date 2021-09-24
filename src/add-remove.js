import { dataBase, updateValues, updateDatabase } from './functions.js';

export function addTask(task) {
  dataBase.push(task);
  updateValues();
}

function normalizeIndexes() {
  for (let x = 0; x < dataBase.length; x += 1) {
    dataBase[x].index = x + 1;
  }
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
import { dataBase, updateValues, updateDatabase } from './functions.js';

export function addTask(task) {
  dataBase.push(task);
  updateValues();
}

export function removeAll() {
  updateDatabase(dataBase.filter((task) => task.completed === false));
  for (let x = 0; x < dataBase.length; x += 1) {
    dataBase[x].index = x;
  }
  updateValues();
}

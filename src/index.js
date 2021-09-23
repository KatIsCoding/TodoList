/* eslint-disable no-unused-vars */
import _ from 'lodash'; // Unused vars disabled for lodash
import './style.css';
import { changeCompletedState, dataBase, loadValues } from './functions.js';

function showTasks() {
  dataBase.sort((first, second) => first.index - second.index);
  const container = document.getElementById('todo-container');
  dataBase.forEach((task) => {
    const taskElement = document.createElement('li');
    taskElement.classList.add('todo-element');

    const completed = document.createElement('input');
    completed.type = 'checkbox';
    completed.checked = task.completed;
    completed.addEventListener('change', () => {
      changeCompletedState(task);
    });
    taskElement.appendChild(completed);

    const description = document.createElement('p');
    description.innerText = task.description;
    taskElement.appendChild(description);

    const moveicon = document.createElement('span');
    moveicon.classList.add('material-icons');
    moveicon.innerText = 'more_vert';
    taskElement.appendChild(moveicon);

    container.appendChild(taskElement);
  });
}

window.onload = () => {
  loadValues();
  showTasks();
};

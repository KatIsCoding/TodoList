/* eslint-disable no-unused-vars */
import _ from 'lodash'; // Unused vars disabled for lodash
import './style.css';
import {
  changeCompletedState, dataBase, loadValues, updateValues,
} from './functions.js';
import { addTask, removeAll } from './add-remove.js';
import Task from './taskClass.js';

export const completedTasks = [];

function renderTask(task) {
  const container = document.getElementById('todo-container');
  const taskElement = document.createElement('li');
  /* Logging the completed tasks element */
  if (task.completed === true) {
    completedTasks.push(taskElement);
  }
  taskElement.classList.add('todo-element');
  const completed = document.createElement('input');
  completed.type = 'checkbox';
  completed.checked = task.completed;
  completed.addEventListener('change', () => {
    changeCompletedState(task);
  });
  taskElement.appendChild(completed);
  const description = document.createElement('input');
  description.type = 'text';
  description.placeholder = 'Enter your task description';
  description.classList.add('description-input');
  description.value = task.description;
  description.addEventListener('input', () => {
    dataBase[task.index].description = description.value;
    updateValues();
  });
  taskElement.appendChild(description);
  const moveicon = document.createElement('span');
  moveicon.classList.add('material-icons');
  moveicon.innerText = 'more_vert';
  taskElement.appendChild(moveicon);
  container.appendChild(taskElement);
}

export function showTasks() {
  const container = document.getElementById('todo-container');
  container.innerHTML = '';
  dataBase.sort((first, second) => first.index - second.index);
  dataBase.forEach((task) => {
    renderTask(task);
  });
}

window.onload = () => {
  loadValues();
  showTasks();
  /* Add event listener to New Task Input */
  function addNewTask() {
    const val = document.getElementById('addTask').value;
    if (val !== '') {
      const obj = new Task(val, dataBase.length, false);
      addTask(obj);
      renderTask(obj);
    }
  }
  document.getElementById('addTask').addEventListener('keyup', (e) => {
    if (e.code === 'Enter') {
      addNewTask();
    }
  });

  document.getElementById('addTaskAction').addEventListener('click', () => {
    addNewTask();
  });

  document.getElementById('wipe-tasks').addEventListener('click', () => {
    removeAll();
    showTasks();
  });
};

/* eslint-disable no-unused-vars */
import _ from 'lodash'; // Unused vars disabled for lodash
import './style.css';
import {
  changeCompletedState, dataBase, loadValues, updateValues,
} from './functions.js';
import { addTask, removeAll, removeTask } from './add-remove.js';
import Task from './taskClass.js';

export const completedTasks = [];
let currentSelected = null;
function renderTask(task) {
  const container = document.getElementById('todo-container');
  const taskElement = document.createElement('li');

  const moveicon = document.createElement('span');

  const description = document.createElement('input');
  const deleteicon = document.createElement('button');
  const completed = document.createElement('input');
  /* Logging the completed tasks element */
  if (task.completed === true) {
    completedTasks.push(taskElement);
  }
  taskElement.classList.add('todo-element');
  taskElement.addEventListener('click', (event) => {
    description.focus();
    taskElement.style.backgroundColor = 'yellow';
    moveicon.style.display = 'none';
    deleteicon.style.display = 'block';
    description.style.backgroundColor = 'yellow';

    if (currentSelected === null) {
      currentSelected = taskElement;
    } else {
      currentSelected.style.backgroundColor = 'white';
      currentSelected.childNodes[3].style.display = 'block';
      currentSelected.childNodes[2].style.display = 'none';
      currentSelected.childNodes[0].style.backgroundColor = 'white';
      currentSelected.childNodes[1].style.backgroundColor = 'white';
      currentSelected = taskElement;
    }
  });
  taskElement.addEventListener('blur', () => {
    taskElement.style.backgroundColor = 'white';
    moveicon.style.display = 'block';
    deleteicon.style.display = 'none';
    description.style.backgroundColor = 'white';
  });

  completed.type = 'checkbox';
  completed.checked = task.completed;
  completed.addEventListener('change', () => {
    changeCompletedState(task);
  });
  taskElement.appendChild(completed);

  description.type = 'text';
  description.placeholder = 'Enter your task description';
  description.classList.add('description-input');
  description.value = task.description;
  description.addEventListener('input', () => {
    dataBase[task.index].description = description.value;
    updateValues();
  });

  taskElement.appendChild(description);

  deleteicon.classList.add('material-icons', 'delete-button');
  deleteicon.innerText = 'delete';
  deleteicon.style.display = 'none';
  deleteicon.addEventListener('click', () => {
    removeTask(task.index);
    container.removeChild(taskElement);
  });
  taskElement.appendChild(deleteicon);

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
      const obj = new Task(val, dataBase.length + 1, false);
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

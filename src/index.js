/* eslint-disable no-unused-vars */
import _ from 'lodash'; // Unused vars disabled for lodash
import './style.css';
import { changeCompletedState, dataBase, loadValues } from './functions.js';

function renderTask(task){
  const container = document.getElementById('todo-container');
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
}


function showTasks() {
  dataBase.sort((first, second) => first.index - second.index);
  dataBase.forEach((task) => {
    renderTask(task)
  });
}

window.onload = () => {
  loadValues();
  showTasks();
  /* Add event listener to New Task Input */
  document.getElementById("addTask").addEventListener("submit", () => {console.log("It worked bro")})

};

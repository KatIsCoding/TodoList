/* eslint-disable no-unused-vars */
import _ from 'lodash'; // Unused vars disabled for lodash
import './style.css';
import { changeCompletedState, dataBase, loadValues, updateValues } from './functions.js';
import { addTask } from "./add-remove.js"
import Task from './taskClass';

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
  const description = document.createElement('input');
  description.type = "text"
  description.value = task.description;
  description.addEventListener("input", () => {
    dataBase[task.index].description = description.value
    updateValues()
  })
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
  document.getElementById("addTask").addEventListener("keyup", (e) => {
    if (e.code === "Enter"){
      if (e.srcElement.value !== ""){
        const obj = new Task(e.srcElement.value, dataBase.length, false)
        addTask(obj)
        renderTask(obj)
      }else {
        alert("Please write a description of your new task")
      }
    }
    
  })

};

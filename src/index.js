import _ from "lodash";
import "./style.css"
import {task, Task} from "./taskClass"

const dataBase = [new Task("Description test1", 0), new Task("Description test2", 1), new Task("Description test3", 2)]

function showTasks(){
    const container = document.getElementById("todo-container")
    dataBase.forEach((task) => {
        const taskElement = document.createElement("li")
        taskElement.classList.add("todo-element")

        const completed = document.createElement("input")
        completed.type = "checkbox"
        taskElement.appendChild(completed)

        const description = document.createElement("p")
        description.innerText = task.description
        taskElement.appendChild(description)

        const moveicon = document.createElement("span")
        moveicon.classList.add("material-icons")
        moveicon.innerText = "more_vert"
        taskElement.appendChild(moveicon)

        container.appendChild(taskElement)
    })
}

window.onload = function() {
    showTasks()
}

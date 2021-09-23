import { dataBase, updateValues } from "./functions.js";

export function addTask(task){
    dataBase.push(task)
    updateValues()
}


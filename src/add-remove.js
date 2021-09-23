import { dataBase, updateValues } from "./functions.js";

export function addTask(task){
    dataBase.push(task)
    updateValues()
}

export function removeAll(){
    dataBase = dataBase.filter(task => task.completed === false)
    for (var x = 0; x < dataBase.length; x++){
        dataBase[x].index = x
    }
    updateValues()
}

import './style.css';
import {createTab, currentTab, arrayPushStorage} from "./tab.js";
import {appendTodoStorage, appendTodo} from './todo.js'
//NOTE TO SELF: do a IIFE to automatically run storage
let length = 0;
const saveTodo = (object) => {
    let stringified = JSON.stringify(object);
    localStorage.setItem('list' + length, stringified);
    console.log(stringified);
}
const createStorage = (title, description, dueDate, priority) => {
    return {title, description, dueDate, priority};
}
const checkLength = () => {
    length = localStorage.length;
}
checkLength();
const loadTodo = () => {
    checkLength();
    let i;
    for (i = 0; i < length; i++) {
        let objectList = JSON.parse(localStorage.getItem('list' + i));
        /*
        console.log(objectList.title);
        console.log(objectList.description);
        console.log(objectList.dueDate);
        console.log(objectList.priority);
        */
       //loadCurrentTab(objectList.title, objectList.description, objectList.dueDate, objectList.priority);
       appendTodoStorage(objectList.title, objectList.description, objectList.dueDate, objectList.priority, i);
    }
};

export {loadTodo, createStorage, saveTodo, checkLength, length}
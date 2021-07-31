import './style.css';
import {appendTodoTab, checkTabLength, tabLength} from "./tab.js";
import {appendTodoStorage} from './todo.js'
//NOTE TO SELF: do a IIFE to automatically run storage
let length = 0;
const saveTodo = (object) => {
    let stringified = JSON.stringify(object);
    localStorage.setItem('list' + length, stringified);
}
const createStorage = (title, description, dueDate, priority) => {
    return {title, description, dueDate, priority};
}
const checkLength = () => {
    length = 0;
    let i;
    for (i = 0; i < localStorage.length; i++) {
        if (localStorage.getItem('list' + i)) {
            length += 1;
        }
    }
}
const loadTodo = () => {
    checkLength();
    checkTabLength();
    let i;
    for (i = 0; i < length; i++) {
        if (localStorage.getItem('list' + i)) {
            let objectList = JSON.parse(localStorage.getItem('list' + i));
            appendTodoStorage(objectList.title, objectList.description, objectList.dueDate, objectList.priority, i);
        }
    }
    let p;
    for (p = 0; p < tabLength; p++) {
        if (localStorage.getItem('tab' + p)) {
            appendTodoTab(localStorage.getItem('tab' + p));
        }
    }
};

export {loadTodo, createStorage, saveTodo, 
    checkLength, length}
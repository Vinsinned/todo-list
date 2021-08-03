import './style.css';
import {appendTodoTab, checkTabLength, tabLength, 
    loopArrayList, currentTabList, currentTab, clearCurrentTab} from "./tab.js";
import {addArrayList, appendTodoStorage} from './todo.js';
import {clearProjects} from './index.js'
//NOTE TO SELF: do a IIFE to automatically run storage
let length = 0;
const saveTodo = (object) => {
    let stringified = JSON.stringify(object);
    localStorage.setItem('list' + length, stringified);
}
const createStorage = (title, description, dueDate, priority, tab) => {
    return {title, description, dueDate, priority, tab};
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
    clearProjects();
    clearCurrentTab();
    let p;
    for (p = 0; p < tabLength; p++) {
        if (localStorage.getItem('tab' + p)) {
            appendTodoTab(localStorage.getItem('tab' + p));
        }
    }
    let i;
    //READ THIS: when list 0 is deleted, make list1 list0 and so on
    for (i = 0; i < length; i++) {
        let list = JSON.parse(localStorage.getItem('list' + i));
        if (list.tab == currentTabList) {
            let objectList = JSON.parse(localStorage.getItem('list' + i));
            addArrayList(objectList.title, objectList.description, objectList.dueDate, objectList.priority, i, currentTabList);
        }
    }
    loopArrayList();
};
const loadTodoList = () => {
    clearCurrentTab();
    let i;
    for (i = 0; i < length; i++) {
        let list = JSON.parse(localStorage.getItem('list' + i));
        console.log(list);
        //if (list) {
            if (list.tab == currentTabList) {
                let objectList = JSON.parse(localStorage.getItem('list' + i));
                addArrayList(objectList.title, objectList.description, objectList.dueDate, objectList.priority, i, currentTabList);
            }
        //}
    }
    loopArrayList();
}

export {loadTodo, createStorage, saveTodo, 
    checkLength, length, loadTodoList}
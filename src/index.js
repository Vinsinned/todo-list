import {todo} from './todo.js';
import {createTab, currentTabList, defaultTab} from './tab.js';
import {createTodo} from './todo.js';
import {loadTodo} from './localStorage.js';

window.localStorage;

//prevents add project to activate when submit is already activated, and vice versa
let active = false; 

//DOM sidebar
let sidebar = document.createElement('div');
sidebar.id = 'sidebar';
document.body.appendChild(sidebar);

let title = document.createElement('h1');
title.textContent = 'Todo List';
title.style.cssText = 'font-family: "Comfortaa", sans-serif;'
sidebar.appendChild(title);

let button = document.createElement('button');
button.textContent = 'Submit';
button.className = 'sidebar';
button.style.cssText = 'margin-top: 20px;'
sidebar.appendChild(button);

let addProject = document.createElement('button');
addProject.textContent = 'Add Project';
addProject.className = 'sidebar';
sidebar.appendChild(addProject);

let projectHeader = document.createElement('h2');
projectHeader.textContent = 'Projects';
projectHeader.style.cssText = 'font-family: "Comfortaa", sans-serif;'
sidebar.appendChild(projectHeader);

let projectContainer = document.createElement('div');
sidebar.appendChild(projectContainer);
projectContainer.id = 'projectContainer';

let content = document.querySelector('#content');
let sidebarSelect = document.querySelector('#sidebar');
let projectSelect = document.querySelector('#projectContainer');

let createDefaultTab = defaultTab('default');

button.addEventListener('click', ()=> {
    createTodo();
});

addProject.addEventListener('click', () => {
    createTab();
})

const switchActive = () => {
    const makeTrue = () => {
        active = true;
    }
    const makeFalse  = () => {
        active = false;
    }
    return {makeTrue, makeFalse};
}
const clearProjects = () => {
    projectSelect.innerHTML = '';
}

/*
//do this tmrw
checkLength();
loadStorage(length);
*/
loadTodo();

export {content, sidebarSelect, projectSelect, active, switchActive, clearProjects}
import { todo } from "./todo.js";
import { tab, createTab, currentTab } from "./tab.js"

//prevents add project to activate when submit is already activated, and vice versa
let active = false; 

const switchActive = () => {
    const makeTrue = () => {
        active = true;
    }
    const makeFalse  = () => {
        active = false;
    }
    return {makeTrue, makeFalse};
}

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

let content = document.querySelector('#content');
let sidebarSelect = document.querySelector('#sidebar');

let defaultTab = tab('default');

button.addEventListener('click', ()=> {
    let newUI = todo(currentTab);
    newUI.createTodo();
});

addProject.addEventListener('click', () => {
    createTab();
})

export {content, sidebarSelect, active, switchActive}
import { todo } from "./todo.js";
import { tab, createTab, currentTab } from "./tab.js"

let button = document.createElement('button');
button.textContent = 'Submit';
document.body.appendChild(button);

let addProject = document.createElement('button');
addProject.textContent = 'Add Project';
document.body.appendChild(addProject);

let todoDiv = document.createElement('div');
let content = document.querySelector('#content');
content.appendChild(todoDiv);

let defaultTab = tab('default');

button.addEventListener('click', ()=> {
    let newUI = todo(currentTab);
    newUI.createTodo();
});

addProject.addEventListener('click', () => {
    createTab();
})

export {todoDiv, content}
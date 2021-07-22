import { todo } from "./todo.js";
import { tab, currentTab } from "./tab.js"

let button = document.createElement('button');
button.textContent = 'Submit';
document.body.appendChild(button);

let todoDiv = document.createElement('div');
let content = document.querySelector('#content');
content.appendChild(todoDiv);

let defaultTab = tab('default');

button.addEventListener('click', ()=> {
    let newUI = todo(currentTab);
    newUI.createTodo();
});

export {todoDiv, content}
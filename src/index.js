import { createTodo } from "./todo";

let button = document.createElement('button');
button.textContent = 'Submit';
document.body.appendChild(button);

let todoDiv = document.createElement('div');
let content = document.querySelector('#content');
content.appendChild(todoDiv);

button.addEventListener('click', ()=> {
    createTodo();
});

export {todoDiv, content}
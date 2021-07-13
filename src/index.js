import { createTodo } from "./todo";

let button = document.createElement('button');
button.textContent = 'Submit';
document.body.appendChild(button);

button.addEventListener('click', ()=> {
    createTodo();
});

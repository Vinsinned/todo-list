import { content, todoDiv } from "./index.js";
import { todo } from "./todo.js";
import "./style.css";

let current;
let currentTab = '';
const tab = (name) => {
    let createTab = document.createElement('p');
    createTab.id = 'tabs';
    createTab.textContent = name;
    document.body.appendChild(createTab);
    let array = [];
    createTab.addEventListener('click', () => {
        currentTab = array;
        switchTabs();
        current = createTab;
        checkCurrent(current);
    });
    currentTab = array;
    current = createTab;
    checkCurrent(createTab, current);
}
const createTab = () => {
    let div = document.createElement('div');
    div.style.cssText = 'width: 250px; margin: auto; background-color: purple; text-align: center';

    let info = document.createElement('p');
    let input = document.createElement('input');
    let submit = document.createElement('button');
    info.textContent = 'Project Name:';
    submit.textContent = 'submit';

    document.body.appendChild(div);
    div.appendChild(info);
    div.appendChild(input);
    div.appendChild(submit);
    submit.style.cssText = 'display: block; margin: auto';

    let divReminder = document.createElement('p');
    div.appendChild(divReminder);

    submit.addEventListener('click', () => {
        if (input.value != '') {
            div.style.cssText = '';
            div.removeChild(info);
            div.removeChild(input);
            div.removeChild(submit);
            let newTab = tab(input.value);
            switchTabs();
        } else {
            divReminder.textContent = 'The text field is empty!';
        }
    });
}
const switchTabs = () => {
    content.innerHTML = '';
    let i;
    for (i = 0; i < currentTab.length; i++) {
        let newUI = todo(currentTab);
        newUI.appendTodo(i);
    }
}
const checkCurrent = (current) => {
    let allTabs = document.querySelectorAll('#tabs');
    let i;
    for (i = 0; i < allTabs.length; i++) {
        if (allTabs[i] == current) {
            allTabs[i].style.cssText = 'color: red';
        } else {
            allTabs[i].style.cssText = 'color: black';
        }
    }
}

export {tab, createTab, currentTab};
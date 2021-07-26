import {content, sidebarSelect, active, switchActive} from "./index.js";
import {todo} from "./todo.js";
import "./style.css";

let current;
let currentTab = '';
const tab = (name) => {
    let createTab = document.createElement('button');
    createTab.id = 'tabs';
    createTab.className = 'sidebar';
    createTab.textContent = name;
    sidebarSelect.appendChild(createTab);
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
    if (active == false) {
    let currentActive = switchActive();
    currentActive.makeTrue();
    let div = document.createElement('div');
    div.style.cssText = `width: 250px; background-color: purple; text-align: center;
    position: absolute;
    left: 230px;
    top: 21%`;

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
            div.removeChild(divReminder);
            let newTab = tab(input.value);
            currentActive.makeFalse();
            switchTabs();
        } else {
            divReminder.textContent = 'The text field is empty!';
        }
    });
}
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
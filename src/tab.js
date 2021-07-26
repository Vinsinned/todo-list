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
    div.style.cssText = `width: 250px; background-color: #343A40; text-align: center;
    position: absolute;
    left: 230px;
    top: 25%;
    border-top-right-radius: 30px; 
    border-bottom-right-radius: 30px;`;

    let info = document.createElement('p');
    info.className = 'divPara';
    let input = document.createElement('input');
    input.className = 'divInput';
    input.style.cssText = 'margin-bottom: 20px;'
    let submit = document.createElement('button');
    submit.id = 'submit';
    info.textContent = 'Project Name';
    submit.textContent = 'submit';

    document.body.appendChild(div);
    div.appendChild(info);
    div.appendChild(input);
    div.appendChild(submit);
    submit.style.cssText = 'display: block; margin: auto';

    let divReminder = document.createElement('p');
    divReminder.className = 'divPara'
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
            allTabs[i].style.cssText = 'background-color: #CED4DA; text-decoration: underline;';
        } else {
            allTabs[i].style.cssText = 'background-color: none; text-decoration: none';
        }
    }
}

export {tab, createTab, currentTab};
import {content, projectSelect, active, switchActive} from "./index.js";
import {appendTodo} from "./todo.js";
import {} from "./localStorage.js";
import "./style.css";

let current;
let currentTab = '';
let tabLength = 0;
const tab = (name) => {
    let createTab = document.createElement('button');
    createTab.id = 'tabs';
    createTab.className = 'sidebar';
    createTab.textContent = name;
    projectSelect.appendChild(createTab);
    let array = [];
    createTab.addEventListener('click', () => {
        if (active == false) {
            currentTab = array;
            switchTabs();
            current = createTab;
            checkCurrent(current);
        }
    });
    currentTab = array;
    current = createTab;
    checkCurrent(createTab, current);
}
const defaultTab = () => {
    let createTab = document.createElement('button');
    createTab.id = 'tabs';
    createTab.className = 'sidebar';
    createTab.textContent = 'default';
    projectSelect.appendChild(createTab);
    let array = [];
    localStorage.setItem('tab', createTab.textContent);
    createTab.addEventListener('click', () => {
        if (active == false) {
            currentTab = array;
            switchTabs();
            current = createTab;
            checkCurrent(current);
        }
    });
    currentTab = array;
    current = createTab;
    checkCurrent(createTab, current);
}
const createTab = () => {
    if (active == false) {
    content.style.cssText = 'filter: blur(1px)'
    let media = window.matchMedia( "(max-width: 961px)" );
    let currentActive = switchActive();
    currentActive.makeTrue();
    let div = document.createElement('div');
    div.id = 'createTabDiv'
    if (media.matches) {
        div.style.cssText = `width: 250px; background-color: #343A40; text-align: center;
        position: absolute;
        left: 230px;
        top: 25%;
        border-top-right-radius: 30px; 
        border-bottom-right-radius: 30px;`;
    } else {
        div.style.cssText = `width: 500px; background-color: #343A40; text-align: center;
        position: absolute; height: 200px;
        left: 50%;
        top: 25%;
        border-radius: 30px;`;
    }

    let info = document.createElement('p');
    info.className = 'divPara';
    let input = document.createElement('input');
    input.className = 'divInput';
    input.style.cssText = 'margin-bottom: 30px;'
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
            //checkTabLength();
            content.style.cssText = 'filter: blur(0)'
            div.style.cssText = '';
            div.removeChild(info);
            div.removeChild(input);
            div.removeChild(submit);
            div.removeChild(divReminder);
            currentActive.makeFalse();
            switchTabs();
            checkTabLength();
            localStorage.setItem('tab' + tabLength, input.value);
            tabLength += 1;
            tab(input.value);
        } else {
            divReminder.textContent = 'The text field is empty!';
        }
    });
}
}
const checkTabLength = () => {
    tabLength = 0;
    let i;
    for (i = 0; i < localStorage.length; i ++) {
        if (localStorage.getItem('tab' + i)) {
            tabLength += 1;
        }
    }
}
let appendTodoTab = (name) => {
    tab(name);
}
const switchTabs = () => {
    content.innerHTML = '';
    let i;
    for (i = 0; i < currentTab.length; i++) {
        appendTodo(i);
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

export {tab, createTab, currentTab, tabLength,
    defaultTab, appendTodoTab, checkTabLength};
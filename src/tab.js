import {content, sidebarSelect, projectSelect, active, switchActive} from "./index.js";
import {startAppendStorage, createTodo, appendTodo, startAppend, editDiv, modifyTodo, modifyAppend} from "./todo.js";
import "./style.css";

let current;
let currentTab = '';
let length = 1;
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
    //localStorage.setItem('tab0', createTab.textContent);
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
            content.style.cssText = 'filter: blur(0)'
            div.style.cssText = '';
            div.removeChild(info);
            div.removeChild(input);
            div.removeChild(submit);
            div.removeChild(divReminder);
            currentActive.makeFalse();
            tab(input.value);
            switchTabs();
            //work on this tmr
            /*
            localStorage.setItem('tab' + length, input.value);
            length += 1;
            tab(input.value);
            loadStorage(length);
            */
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
const arrayPushStorage = (title, description, dueDate, priority) => {
    if (priority == 'yes') {
        currentTab.unshift([title, description, dueDate, priority]);
    } else {
        currentTab.push([title, description, dueDate, priority]);
    }
}
/*
const loadStorage = (length) => {
    let i;
    console.log(length);
    projectSelect.innerHTML = '';
    for (i = 0; i < length; i++) {
        let tabName = localStorage.getItem('tab' + i);
        let newTab = tab(tabName);
    }
}
const checkLength = () => {
    let i;
    for (i = 1; i < localStorage.length; i++) {
        length += 1;
    }
}
*/

//loadStorage, checkLength
export {arrayPushStorage, tab, createTab, currentTab, defaultTab, length};
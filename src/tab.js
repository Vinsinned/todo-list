import {content, projectSelect, active, switchActive} from "./index.js";
import {appendTodo, appendTodoStorage} from "./todo.js";
import {loadTodoList} from "./localStorage.js";
import "./style.css";

let current;
let currentTab = [];
currentTab.id = 'currentTab';
let currentTabList;
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
            current = createTab;
            checkCurrent(current);
            currentTabList = name;
            switchTabs();
        }
    });
    currentTabList = name;
    currentTab = array;
    checkCurrent(createTab, current);
}
const defaultTab = () => {
    let createTab = document.createElement('button');
    createTab.id = 'tabs';
    createTab.className = 'sidebar';
    createTab.textContent = 'default';
    projectSelect.appendChild(createTab);
    let array = [];
    localStorage.setItem('tab0', createTab.textContent);
    createTab.addEventListener('click', () => {
        if (active == false) {
            currentTab = array;
            current = createTab;
            checkCurrent(current);
            currentTabList = 'default';
            switchTabs();
        }
    });
    currentTab = array;
    current = createTab;
    checkCurrent(createTab, current);
    currentTabList = 'default';
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

    let buttonsDiv = document.createElement('div');
    buttonsDiv.id = 'buttonsDiv';
    let info = document.createElement('p');
    info.className = 'divPara';
    let input = document.createElement('input');
    input.className = 'divInput';
    input.style.cssText = 'margin-bottom: 30px;'
    let submit = document.createElement('button');
    submit.className = 'tabButtons';
    info.textContent = 'Project Name';
    submit.textContent = 'Submit';
    let cancel = document.createElement('button');
    cancel.textContent = 'Cancel'
    cancel.className = 'tabButtons';

    document.body.appendChild(div);
    div.appendChild(info);
    div.appendChild(input);
    div.appendChild(buttonsDiv);
    buttonsDiv.appendChild(submit);
    buttonsDiv.appendChild(cancel);

    let divReminder = document.createElement('p');
    divReminder.className = 'divPara'
    div.appendChild(divReminder);

    cancel.addEventListener('click', () => {
        content.style.cssText = 'filter: blur(0)'
        div.style.cssText = '';
        div.removeChild(info);
        div.removeChild(input);
        div.removeChild(buttonsDiv)
        div.removeChild(divReminder);
        currentActive.makeFalse();
    })

    submit.addEventListener('click', () => {
        let duplicate = [];
        let i;
        for (i = 0; i < localStorage.length; i++) {
            if (localStorage.getItem('tab' + i)) {
                duplicate.push(localStorage.getItem('tab' + i));
            }
        }
        if (input.value != '' && duplicate.includes(input.value) == false) {
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
            //prevent making duplicate tabs
            localStorage.setItem('tab' + tabLength, input.value);
            tabLength += 1;
            tab(input.value);
            loadTodoList();
            content.innerHTML = '';
        } else if (input.value == '') {
            divReminder.textContent = 'The text field is empty!';
        } else if (duplicate.includes(input.value)) {
            divReminder.textContent = 'There is already a tab with the same name!';
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
    clearCurrentTab();
    content.innerHTML = '';
    /*
    for (i = 0; i < currentTab.length; i++) {
        appendTodo(i);
    }
    */
   loadTodoList();
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
const clearCurrentTab = () => {
    currentTab = [];
}
const loopArrayList = () => {
    let i;
    for (i = 0; i < currentTab.length; i++) {
        appendTodoStorage(currentTab[i][0], currentTab[i][1], currentTab[i][2], currentTab[i][3], currentTab[i][4], currentTab[i][5]);
    }
}

export {tab, createTab, currentTab, clearCurrentTab, tabLength, currentTabList,
    defaultTab, appendTodoTab, checkTabLength, loopArrayList};
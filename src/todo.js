import './style.css';
import {createStorage, saveTodo, checkLength, length} from './localStorage.js'
import {content, active, switchActive} from './index.js';
import {currentTab, currentTabList} from './tab.js';

const createTodo = () => {
    content.style.cssText = 'filter: blur(1px)'
    let media = window.matchMedia( "(max-width: 961px)" );
    let today = new Date();
    if (active == false) {
    let currentActive = switchActive();
    currentActive.makeTrue();
    let div = document.createElement('div');
    div.id = 'prompt';
    if (media.matches) {
        div.style.cssText = `background-color: #343A40;
        width: 400px; text-align: center; padding-top: 10px;
        padding-bottom: 10px; position: absolute; margin-left: 230px;
        top: 15%; border-top-right-radius: 30px; border-bottom-right-radius: 30px;`;
    } else {
        div.style.cssText = `background-color: #343A40;
        width: 400px; text-align: center; padding-top: 10px;
        padding-bottom: 10px; position: absolute; left: 50%;
        top: 15%; border-radius: 30px;`;
    }

    let buttonsDiv = document.createElement('div');
    buttonsDiv.id = 'buttonsDiv';
    let divReminder = document.createElement('div');
    divReminder.className = 'divPara';
    divReminder.id = 'reminder';
    let form1 = document.createElement('form');
    //Title
    let titleQuestion = document.createElement('p');
    titleQuestion.className = 'divPara';
    let titleInput = document.createElement('input');
    titleInput.className = 'divInput';
    //Description
    let descriptionQuestion = document.createElement('p');
    descriptionQuestion.className = 'divPara';
    let descriptionInput = document.createElement('input');
    descriptionInput.className = 'divInput';
    //Date
    let dateQuestion = document.createElement('p');
    dateQuestion.className = 'divPara';
    let dateInput = document.createElement('input');
    dateInput.className = 'divInput';
    //Priority
    let priorityQuestion = document.createElement('p');
    priorityQuestion.className = 'divPara';
    let priorityLabel = document.createElement('label');
    priorityLabel.className = 'divPara';
    let priorityInput = document.createElement('input');
    let submit = document.createElement('button');
    submit.className = 'tabButtons';
    let cancel = document.createElement('button');
    cancel.textContent = 'Cancel'
    cancel.className = 'tabButtons';

    //Title
    titleQuestion.textContent = 'Title';
    titleInput.type = 'text';
    //Description
    descriptionQuestion.textContent = 'Description';
    descriptionInput.type = 'text';
    //Date
    dateQuestion.textContent = 'Deadline';
    dateInput.type = 'date';
    dateInput.value = `${today.getFullYear()}-0${today.getMonth() + 1}-${today.getDate()}`
    //Priority 
    form1.name = 'priority';
    form1.id = 'priority';
    priorityQuestion.textContent = 'Is this important?';
    priorityInput.name = 'checkboxButton';
    priorityInput.type = 'checkbox';
    priorityInput.value = 'yes';
    priorityLabel.setAttribute('for', 'priority');
    priorityLabel.textContent = 'Yes';

    document.body.appendChild(div);
    //cancelIcon
    div.appendChild(cancel);
    //Title
    div.appendChild(titleQuestion);
    div.appendChild(titleInput);
    //Description
    div.appendChild(descriptionQuestion);
    div.appendChild(descriptionInput);
    //Date
    div.appendChild(dateQuestion);
    div.appendChild(dateInput);
    //Priority
    div.appendChild(priorityQuestion)
    div.appendChild(form1);
    form1.appendChild(priorityLabel);
    priorityLabel.appendChild(priorityInput);
    div.appendChild(buttonsDiv);
    buttonsDiv.appendChild(submit);
    buttonsDiv.appendChild(cancel);
    div.appendChild(divReminder);

    cancel.addEventListener('click', () => {
        content.style.cssText = 'filter: blur(0)'
        div.innerHTML = '';
        div.style.cssText = 'color: white';
        currentActive.makeFalse();
    })

    submit.textContent = 'Submit';
    submit.addEventListener('click', () => {
        if (titleInput.value != '' || descriptionInput.value != '' || currentTab.includes(titleInput.value, descriptionInput.value, dateInput.value, form1Value)) {
            content.style.cssText = 'filter: blur(0)'
            div.innerHTML = '';
            div.style.cssText = 'color: white';
            let form1Value;
            if (priorityInput.checked) {
                form1Value = priorityInput.value;
            }
            currentActive.makeFalse();
            startAppend(titleInput.value, descriptionInput.value, dateInput.value, form1Value);
        } else {
            divReminder.innerHTML = '';
            divReminder.style.cssText = '';
            let reminder = document.createElement('p');
            reminder.className = 'reminder';
            reminder.textContent = 'Please fill out the form!';
            reminder.style.cssText = 'color: white';
            divReminder.appendChild(reminder);
        }
    })
    }
}
//Called by startAppend
const appendTodo = (i) => {
    let todoDiv = document.createElement('div');
    todoDiv.id = 'todoDiv';
    content.appendChild(todoDiv);
    todoDiv.className = 'todo';
    //creates elements to input array info
    let deleteIcon = document.createElement('p');
    let checklistIcon = document.createElement('p');
    checklistIcon.style.cssText = 'cursor: pointer;';
    let editIcon = document.createElement('p');
    editIcon.style.cssText = 'cursor: pointer;';
    let icon = document.createElement('p');
    let todoTitle = document.createElement('h2');
    let todoDescription = document.createElement('p');
    let todoDate = document.createElement('p');
    editIcon.className = 'material-icons';
    deleteIcon.className = 'material-icons';
    checklistIcon.className = 'material-icons';
    icon.className = 'material-icons';
    editIcon.textContent = 'edit';
    deleteIcon.textContent = 'close';
    checklistIcon.textContent = 'check_box_outline_blank'
    deleteIcon.id = 'close';
    deleteIcon.setAttribute('data-index', currentTab.indexOf(currentTab[i]));
    icon.textContent = 'add';
    icon.id = 'add';
    todoTitle.textContent = currentTab[i][0];
    todoDescription.textContent = currentTab[i][1];
    todoDescription.style.cssText = 'display: block'
    todoDate.textContent = currentTab[i][2];
    //checks to see if list is note
    let headerDiv = document.createElement('div');
    let descriptionDiv = document.createElement('div');
    descriptionDiv.id = 'descriptionDiv';
    headerDiv.id = 'headerDiv';
    todoDiv.appendChild(headerDiv);
    headerDiv.appendChild(icon)
    headerDiv.appendChild(todoTitle);
    //check priority
    if (currentTab[i][3] == 'yes') {
        todoTitle.className = 'red';
    }
    headerDiv.appendChild(todoDate);
    headerDiv.appendChild(editIcon);
    headerDiv.appendChild(checklistIcon);
    headerDiv.appendChild(deleteIcon);
    headerDiv.style.cssText = 'display: flex; align-items: center';
    todoDate.style.cssText = 'margin-left: auto;'
    //expand icon event listener
    icon.addEventListener('click', () => {
        if (active == false) {
            icon.classList.toggle('extend');
            if (icon.classList.contains('extend')) {
                icon.textContent = 'remove';
                todoDiv.appendChild(descriptionDiv);
                descriptionDiv.appendChild(todoDescription);
                todoDescription.className = 'description';
            } else {
                todoDiv.removeChild(descriptionDiv)
                icon.textContent = 'add';
            }
        }
    });
    editIcon.addEventListener('click', () => {
        if (active == false) {
            editDiv(deleteIcon);
        }
    });
    //delete icon event listener
    deleteIcon.addEventListener('click', () => {
        if (active == false) {
            todoDiv.removeChild(headerDiv);
            if (todoDescription.classList.contains('description')) {
                todoDiv.removeChild(descriptionDiv);
            }
            currentTab.splice(deleteIcon.getAttribute('data-index'), 1);
            localStorage.removeItem('list' + deleteIcon.getAttribute('data-index'));
        }
    });
    checklistIcon.addEventListener('click', () => {
        if (active == false) {
            checklistIcon.classList.toggle('box');
            if (checklistIcon.classList.contains('box')) {
                checklistIcon.textContent = 'check_box';
                todoTitle.style.cssText = 'text-decoration: line-through';
            } else {
                checklistIcon.textContent = 'check_box_outline_blank';
                todoTitle.style.cssText = 'text-decoration: none;';
            }
        }
    })
    return deleteIcon;
}
const appendTodoStorage = (title, description, dueDate, priority, number, tab) => {
    let todoDiv = document.createElement('div');
    todoDiv.id = 'todoDiv';
    content.appendChild(todoDiv);
    todoDiv.className = 'todo';
    //creates elements to input array info
    let deleteIcon = document.createElement('p');
    let checklistIcon = document.createElement('p');
    checklistIcon.style.cssText = 'cursor: pointer;';
    let editIcon = document.createElement('p');
    editIcon.style.cssText = 'cursor: pointer;';
    let icon = document.createElement('p');
    let todoTitle = document.createElement('h2');
    let todoDescription = document.createElement('p');
    let todoDate = document.createElement('p');
    editIcon.className = 'material-icons';
    deleteIcon.className = 'material-icons';
    checklistIcon.className = 'material-icons';
    icon.className = 'material-icons';
    editIcon.textContent = 'edit';
    deleteIcon.textContent = 'close';
    checklistIcon.textContent = 'check_box_outline_blank'
    deleteIcon.id = 'close';
    deleteIcon.setAttribute('data-index', number);
    icon.textContent = 'add';
    icon.id = 'add';
    todoTitle.textContent = title;
    todoDescription.textContent = description;
    todoDescription.style.cssText = 'display: block'
    todoDate.textContent = dueDate;
    //checks to see if list is note
    let headerDiv = document.createElement('div');
    let descriptionDiv = document.createElement('div');
    descriptionDiv.id = 'descriptionDiv';
    headerDiv.id = 'headerDiv';
    todoDiv.appendChild(headerDiv);
    headerDiv.appendChild(icon)
    headerDiv.appendChild(todoTitle);
    //check priority
    if (priority == 'yes') {
        todoTitle.className = 'red';
    }
    headerDiv.appendChild(todoDate);
    headerDiv.appendChild(editIcon);
    headerDiv.appendChild(checklistIcon);
    headerDiv.appendChild(deleteIcon);
    headerDiv.style.cssText = 'display: flex; align-items: center';
    todoDate.style.cssText = 'margin-left: auto;'
    //expand icon event listener
    icon.addEventListener('click', () => {
        if (active == false) {
            icon.classList.toggle('extend');
            if (icon.classList.contains('extend')) {
                icon.textContent = 'remove';
                todoDiv.appendChild(descriptionDiv);
                descriptionDiv.appendChild(todoDescription);
                todoDescription.className = 'description';
            } else {
                todoDiv.removeChild(descriptionDiv)
                icon.textContent = 'add';
            }
        }
    });
    editIcon.addEventListener('click', () => {
        if (active == false) {
            editDiv(deleteIcon);
        }
    });
    //delete icon event listener
    deleteIcon.addEventListener('click', () => {
        if (active == false) {
            todoDiv.removeChild(headerDiv);
            if (todoDescription.classList.contains('description')) {
                todoDiv.removeChild(descriptionDiv);
            }
            currentTab.splice(deleteIcon.getAttribute('data-index'), 1);
            localStorage.removeItem('list' + deleteIcon.getAttribute('data-index'));
        }
    });
    checklistIcon.addEventListener('click', () => {
        if (active == false) {
            checklistIcon.classList.toggle('box');
            if (checklistIcon.classList.contains('box')) {
                checklistIcon.textContent = 'check_box';
                todoTitle.style.cssText = 'text-decoration: line-through';
            } else {
                checklistIcon.textContent = 'check_box_outline_blank';
                todoTitle.style.cssText = 'text-decoration: none;';
            }
        }
    })
    return deleteIcon;
}
//Called by createTodo to append new list
const startAppend = (title, description, dueDate, priority) => {
        if (priority == 'yes') {
            currentTab.unshift([title, description, dueDate, priority]);
            content.innerHTML = '';
        } else {
            currentTab.push([title, description, dueDate, priority]);
            content.innerHTML = '';
        }
        let newList = createStorage(title, description, dueDate, priority, currentTabList);
        checkLength();
        localStorage.setItem('list' + length, newList);
        saveTodo(newList);
        let i;
        for (i = 0; i < currentTab.length; i++) {
            appendTodo(i);
        }
}
const addArrayList = (title, description, dueDate, priority, number, tab) => {
    if (priority == 'yes') {
        currentTab.unshift([title, description, dueDate, priority, number, tab]);
        content.innerHTML = '';
    } else {
        currentTab.push([title, description, dueDate, priority, number, tab]);
        content.innerHTML = '';
    }
}
const modifyTodo = (index) => {
        content.style.cssText = 'filter: blur(1px)'
        let media = window.matchMedia( "(max-width: 961px)" );
        let today = new Date();
        if (active == false) {
        let currentActive = switchActive();
        currentActive.makeTrue();
        let div = document.createElement('div');
        div.id = 'prompt';
        if (media.matches) {
            div.style.cssText = `background-color: #343A40;
            width: 400px; text-align: center; padding-top: 10px;
            padding-bottom: 10px; position: absolute; margin-left: 320px;
            top: 10%; border-radius: 30px;`;
        } else {
            div.style.cssText = `background-color: #343A40;
            width: 400px; text-align: center; padding-top: 10px;
            padding-bottom: 10px; position: absolute; left: 50%;
            top: 10%; border-radius: 30px;`;
        }
        
        let buttonsDiv = document.createElement('div');
        buttonsDiv.id = 'buttonsDiv';
        let divReminder = document.createElement('div');
        divReminder.className = 'divPara';
        divReminder.id = 'reminder';
        let form1 = document.createElement('form');
        //Title
        let titleQuestion = document.createElement('p');
        titleQuestion.className = 'divPara';
        let titleInput = document.createElement('input');
        titleInput.className = 'divInput';
        //Description
        let descriptionQuestion = document.createElement('p');
        descriptionQuestion.className = 'divPara';
        let descriptionInput = document.createElement('input');
        descriptionInput.className = 'divInput';
        //Date
        let dateQuestion = document.createElement('p');
        dateQuestion.className = 'divPara';
        let dateInput = document.createElement('input');
        dateInput.className = 'divInput';
        //Priority
        let priorityQuestion = document.createElement('p');
        priorityQuestion.className = 'divPara';
        let priorityLabel = document.createElement('label');
        priorityLabel.className = 'divPara';
        let priorityInput = document.createElement('input');
        let submit = document.createElement('button');
        submit.className = 'tabButtons';
        let cancel = document.createElement('button');
        cancel.textContent = 'Cancel'
        cancel.className = 'tabButtons';
    
        //Title
        titleQuestion.textContent = 'Title';
        titleInput.type = 'text';
        //Description
        descriptionQuestion.textContent = 'Description';
        descriptionInput.type = 'text';
        //Date
        dateQuestion.textContent = 'Deadline';
        dateInput.type = 'date';
        dateInput.value = `${today.getFullYear()}-0${today.getMonth() + 1}-${today.getDate()}`
        //Priority 
        form1.name = 'priority';
        form1.id = 'priority';
        priorityQuestion.textContent = 'Is this important?';
        priorityInput.name = 'checkboxButton';
        priorityInput.type = 'checkbox';
        priorityInput.value = 'yes';
        priorityLabel.setAttribute('for', 'priority');
        priorityLabel.textContent = 'Yes';
    
        document.body.appendChild(div);
        //Title
        div.appendChild(titleQuestion);
        div.appendChild(titleInput);
        //Description
        div.appendChild(descriptionQuestion);
        div.appendChild(descriptionInput);
        //Date
        div.appendChild(dateQuestion);
        div.appendChild(dateInput);
        //Priority
        div.appendChild(priorityQuestion)
        div.appendChild(form1);
        form1.appendChild(priorityLabel);
        priorityLabel.appendChild(priorityInput);
        div.appendChild(buttonsDiv);
        buttonsDiv.appendChild(submit);
        buttonsDiv.appendChild(cancel);
        div.appendChild(divReminder);
        submit.textContent = 'Submit';

        cancel.addEventListener('click', () => {
            content.style.cssText = 'filter: blur(0)'
            div.innerHTML = '';
            div.style.cssText = 'color: white';
            currentActive.makeFalse();
        });

        submit.addEventListener('click', () => {
        if (titleInput.value != '' || descriptionInput.value != '') {
            content.style.cssText = 'filter: blur(0);'
            div.innerHTML = '';
            div.style.cssText = 'color: white';
            let form1Value;
            if (priorityInput.checked) {
                form1Value = priorityInput.value;
            }
            currentActive.makeFalse();
            let array = [titleInput.value, descriptionInput.value, dateInput.value, form1Value]
            currentTab.splice(index, 1, array);
            modifyAppend();
        } else {
            divReminder.innerHTML = '';
            divReminder.style.cssText = '';
            let reminder = document.createElement('p');
            reminder.className = 'reminder';
            reminder.textContent = 'Please fill out the form!';
            reminder.style.cssText = 'color: red';
            divReminder.appendChild(reminder);
        }
    })
    }
}
const editDiv = (deleteIcon) => {
        let index = deleteIcon.getAttribute('data-index');
        modifyTodo(index);
}
const modifyAppend = () => {
        content.innerHTML = '';
        let i;
        for (i = 0; i < currentTab.length; i++) {
            appendTodo(i);
        }
}

export {createTodo, appendTodo, startAppend, appendTodoStorage,  
    editDiv, modifyTodo, modifyAppend, addArrayList}
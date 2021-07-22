import './style.css';
import { todoDiv, content } from './index.js';

const todo = (currentTab) => {
    const createTodo = () => {
    let today = new Date();
    let div = document.createElement('div');
    div.id = 'prompt';
    div.style.cssText = `background-color: bisque;
    width: 400px;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    margin: auto;
    position: relative;`;

    let divReminder = document.createElement('div');
    divReminder.id = 'reminder';
    let form1 = document.createElement('form');
    //Title
    let titleQuestion = document.createElement('p');
    let titleInput = document.createElement('input');
    //Description
    let descriptionQuestion = document.createElement('p');
    let descriptionInput = document.createElement('input');
    //Date
    let dateQuestion = document.createElement('p');
    let dateInput = document.createElement('input');
    //Priority
    let priorityQuestion = document.createElement('p');
    let priorityLabel1 = document.createElement('label');
    let priorityLabel2 = document.createElement('label');
    let priorityInput1 = document.createElement('input');
    let priorityInput2 = document.createElement('input');
    let submit = document.createElement('button');

    //Title
    titleQuestion.textContent = 'Title:';
    titleInput.type = 'text';
    //Description
    descriptionQuestion.textContent = 'Description:';
    descriptionInput.type = 'text';
    //Date
    dateQuestion.textContent = 'Deadline:';
    dateInput.type = 'date';
    dateInput.value = `${today.getFullYear()}-0${today.getMonth() + 1}-${today.getDate()}`
    //Priority 
    form1.name = 'priority';
    form1.id = 'priority';
    priorityQuestion.textContent = 'Is this important?';
    priorityInput1.name = 'radioButton';
    priorityInput1.type = 'radio';
    priorityInput1.value = 'yes';
    priorityInput1.checked = true;
    priorityInput2.name = 'radioButton';
    priorityInput2.type = 'radio';
    priorityInput2.value = 'no';
    priorityLabel1.setAttribute('for', 'priority');
    priorityLabel1.textContent = 'Yes';
    priorityLabel2.setAttribute('for', 'priority');
    priorityLabel2.textContent = 'No';

    content.appendChild(div);
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
    form1.appendChild(priorityLabel1);
    priorityLabel1.appendChild(priorityInput1);
    form1.appendChild(priorityLabel2);
    priorityLabel2.appendChild(priorityInput2);

    div.appendChild(submit);
    div.appendChild(divReminder);
    submit.textContent = 'Submit';
    submit.addEventListener('click', () => {
        if (titleInput.value != '' || descriptionInput.value != '') {
            div.innerHTML = '';
            div.style.cssText = 'color: white';
            let form1Value;
            let form2Value;
            if (priorityInput1.checked) {
                form1Value = priorityInput1.value;
            } else if (priorityInput2.checked) {
                form1Value = priorityInput2.value;
            }
            startAppend(titleInput.value, descriptionInput.value, dateInput.value, form1Value);
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
    //Called by startAppend
    const appendTodo = (i) => {
        //loop for each array in a list of arrays (for index attribute)
        todoDiv.className = 'todo';
        //creates elements to input array info
        let deleteIcon = document.createElement('p');
        let checklistIcon = document.createElement('p');
        let icon = document.createElement('p');
        let todoTitle = document.createElement('h2');
        let todoDescription = document.createElement('p');
        let todoDate = document.createElement('p');
        deleteIcon.className = 'material-icons';
        checklistIcon.className = 'material-icons';
        icon.className = 'material-icons';
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
        todoDiv.appendChild(headerDiv);
        headerDiv.appendChild(icon)
        headerDiv.appendChild(todoTitle);
        //check priority
        if (currentTab[i][3] == 'yes') {
            todoTitle.className = 'red';
        }
        headerDiv.appendChild(todoDate);
        headerDiv.appendChild(checklistIcon);
        headerDiv.appendChild(deleteIcon);
        headerDiv.style.cssText = 'display: flex; align-items: center';
        todoDate.style.cssText = 'margin-left: auto;'
        //expand icon event listener
        icon.addEventListener('click', () => {
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
        });
        //delete icon event listener
        deleteIcon.addEventListener('click', () => {
            todoDiv.removeChild(headerDiv);
            if (todoDescription.classList.contains('description')) {
                todoDiv.removeChild(descriptionDiv);
            }
            currentTab.splice(deleteIcon.getAttribute('data-index'), 1);
        });
        checklistIcon.addEventListener('click', () => {
            checklistIcon.classList.toggle('box');
            if (checklistIcon.classList.contains('box')) {
                checklistIcon.textContent = 'check_box';
                todoTitle.style.cssText = 'text-decoration: line-through';
            } else {
                checklistIcon.textContent = 'check_box_outline_blank';
                todoTitle.style.cssText = 'text-decoration: none;';
            }
        })
    return deleteIcon;
    }
    //Called by createTodo to append new list
    const startAppend = (title, description, dueDate, priority) => {
        if (priority == 'yes') {
            console.log(title, description, dueDate, priority);
            currentTab.unshift([title, description, dueDate, priority]);
            todoDiv.innerHTML = '';
        } else {
            currentTab.push([title, description, dueDate, priority]);
            todoDiv.innerHTML = '';
        }
        let i;
        for (i = 0; i < currentTab.length; i++) {
            appendTodo(i);
        }
    }
    return {createTodo, appendTodo, startAppend}
}

export {todo}
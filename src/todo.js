import './style.css';
import { todoDiv, content } from './index.js';

const appendTodo = (title, description, dueDate, priority, type) => {
    todoDiv.className = 'todo';
    let deleteIcon = document.createElement('p');
    let icon = document.createElement('p');
    let todoTitle = document.createElement('h2');
    let todoDescription = document.createElement('p');
    let todoDate = document.createElement('p');
    deleteIcon.className = 'material-icons';
    icon.className = 'material-icons';
    deleteIcon.textContent = 'close';
    deleteIcon.id = 'close';
    icon.textContent = 'add';
    icon.id = 'add';
    todoTitle.textContent = title;
    todoDescription.textContent = description;
    todoDescription.style.cssText = 'display: block'
    todoDate.textContent = dueDate;
    if (type == 'note') {
        let headerDiv = document.createElement('div');
        let descriptionDiv = document.createElement('div');
        todoDiv.appendChild(headerDiv);
        headerDiv.appendChild(icon)
        headerDiv.appendChild(todoTitle);
        if (priority == 'yes') {
            todoTitle.style.cssText = 'color: red';
        }
        headerDiv.appendChild(todoDate);
        headerDiv.appendChild(deleteIcon);
        headerDiv.style.cssText = 'display: flex; align-items: center';
        todoDate.style.cssText = 'margin-left: auto;'
        icon.addEventListener('click', () => {
            icon.classList.toggle('extend');
            if (icon.classList.contains('extend')) {
                icon.textContent = 'remove';
                todoDiv.appendChild(descriptionDiv);
                descriptionDiv.appendChild(todoDescription);
                todoDescription.className = 'description';
                todoDescription.textContent = description;
            } else {
                todoDescription.innerHTML = '';
                icon.textContent = 'add';
            }
        });
        deleteIcon.addEventListener('click', () => {
            todoDiv.removeChild(headerDiv);
            if (todoDescription.classList.contains('description')) {
                todoDiv.removeChild(descriptionDiv);
            }
        })
    } else if (type == 'checklist') {
        let headerDiv = document.createElement('div');
        icon.textContent = 'check_box_outline_blank';
        todoDiv.appendChild(headerDiv);
        headerDiv.appendChild(icon);
        headerDiv.appendChild(todoTitle);
        if (priority == 'yes') {
            todoTitle.style.cssText = 'color: red';
        }
        headerDiv.appendChild(todoDate);
        headerDiv.appendChild(deleteIcon);
        headerDiv.style.cssText = 'display: flex; align-items: center';
        todoDate.style.cssText = 'margin-left: auto;';
        icon.addEventListener('click', () => {
            icon.classList.toggle('box');
            if (icon.classList.contains('box')) {
                icon.textContent = 'check_box';
                todoTitle.style.cssText = 'text-decoration: line-through';
            } else {
                icon.textContent = 'check_box_outline_blank';
                todoTitle.style.cssText = 'text-decoration: none;';
            }
        })
        deleteIcon.addEventListener('click', () => {
            todoDiv.removeChild(headerDiv);
        })
    }
    return {todoDiv}
}
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
    position: relative;`

    let divReminder = document.createElement('div');
    divReminder.id = 'reminder';
    let form1 = document.createElement('form');
    let form2 = document.createElement('form');
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
    let typeQuestion = document.createElement('p');
    let typeLabel1 = document.createElement('label');
    let typeLabel2 = document.createElement('label');
    let typeInput1 = document.createElement('input');
    let typeInput2 = document.createElement('input');
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
    //Type
    form2.name = 'type';
    form2.id = 'type';
    typeQuestion.textContent = 'Type:';
    typeInput1.name = 'listType';
    typeInput1.type = 'radio';
    typeInput1.value = 'note';
    typeInput1.checked = true;
    typeInput2.name = 'listType';
    typeInput2.type = 'radio';
    typeInput2.value = 'checklist';
    typeLabel1.setAttribute('for', 'type');
    typeLabel1.textContent = 'Note';
    typeLabel2.setAttribute('for', 'type');
    typeLabel2.textContent = 'Checklist';
    

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
    //Type
    div.appendChild(typeQuestion)
    div.appendChild(form2);
    form2.appendChild(typeLabel1);
    typeLabel1.appendChild(typeInput1);
    form2.appendChild(typeLabel2);
    typeLabel2.appendChild(typeInput2);


    div.appendChild(submit);
    div.appendChild(divReminder);
    submit.textContent = 'Submit';

    submit.addEventListener('click', () => {
        if (titleInput.value != '' || descriptionInput.value != '') {
            div.innerHTML = '';
            div.style.cssText = 'color: white';
            let form1Value = null;
            let form2Value = null;
            if (priorityInput1.checked) {
                form1Value = priorityInput1.value;
            } else if (priorityInput2.checked) {
                form1Value = priorityInput2.value;
            }
            if (typeInput1.checked) {
                form2Value = typeInput1.value;
            } else if (typeInput2.checked) {
                form2Value = typeInput2.value;
            }
            submitPressed.startAppend(titleInput.value, descriptionInput.value, dateInput.value, form1Value, form2Value);
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

let list = [];
const submitPressed = (() => {
    const startAppend = (title, description, dueDate, priority, type) => {
        if (priority == 'yes') {
            list.unshift([title, description, dueDate, priority, type]);
        } else {
            list.push([title, description, dueDate, priority, type]);
        }
        let i;
        todoDiv.innerHTML = '';
        for (i = 0; i < list.length; i++) {
            appendTodo(list[i][0], list[i][1], list[i][2], list[i][3], list[i][4]);
        }
    }
    return {
        startAppend
    }
})();

export {appendTodo, createTodo}
import "./style.css";

let currentTab = '';
const tab = (name) => {
    let createTab = document.createElement('p');
    createTab.textContent = name;
    document.body.appendChild(createTab);
    let array = [];
    createTab.addEventListener('click', () => {
        currentTab = array;
        console.log(currentTab)
    });
    currentTab = array;
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
        } else {
            divReminder.textContent = 'The text field is empty!';
        }
    });
}

export {tab, createTab, currentTab};
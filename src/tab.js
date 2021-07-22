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

export {tab, currentTab};
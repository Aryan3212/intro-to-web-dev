console.log('Hello World!');

// const myName = prompt('What\'s your name?');

// const header = document.querySelector('h1');

// header.innerText = `${header.innerText} of ${myName}`;

const form = document.getElementById('task-form-one');
const taskList = [];
const firstList = document.getElementById('task-list-one');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Prevented the form GET request');
    console.log(event);
    taskList.push(event.target[0].value);
    const newListElements = [];
    // debugger
    for (const task of taskList) {
        const listElem = document.createElement('li');
        listElem.innerText = task;
        newListElements.push(listElem);
    }
    firstList.replaceChildren(...newListElements);
});
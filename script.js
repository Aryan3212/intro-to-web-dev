console.log('Hello World!');

// const myName = prompt('What\'s your name?');

// // Document Object Model - DOM Manipulation
// const header = document.querySelector('h1');

// header.innerText = `${header.innerText} of ${myName}`;
// const myObject = {
//     name: 'Aryan',
//     title: 'Book'
// };
// console.log(myObject.name);

const form = document.getElementById('task-form-one');
const taskList = [];
const firstList = document.getElementById('task-list-one');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    // console.log('Prevented the form GET request');
    // console.log(event);
    taskList.push(event.target[0].value);
    const newListElements = [];
    // debugger
    // task 1, task 2
    for (const task of taskList) {
        const listElem = document.createElement('li'); // <li> </li>
        listElem.innerText = task; // <li> task 1 </li>
        listElem.style.color = 'red';
        newListElements.push(listElem); // [ <li> task 1 </li> ]
    }
    firstList.replaceChildren(...newListElements);
});
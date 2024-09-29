console.log('Hello World!');

const myName = prompt('What\'s your name?');

const header = document.querySelector('h1');

header.innerText = `${header.innerText} of ${myName}`;


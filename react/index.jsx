import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function TaskList() {
  const [taskList, setTaskList] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(event);
    setInputValue('');
    setTaskList([...taskList, event.target[0].value]);
  }
  return <>
    <h1>Hello from React!</h1>
    <form onSubmit={submitHandler}>
      <input type="text" value={inputValue} onInput={(e) => setInputValue(e.target.value)} />
      <button type='submit' >
        Submit
      </button>
    </form>
    <ul>
      {taskList.map((task, i) => <li key={i}>{task}</li>)}
    </ul>
  </>;
}

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<TaskList />);
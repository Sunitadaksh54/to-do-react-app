import React from 'react'
import { useState } from 'react'
import ToDoItem from './ToDoItem';
import '../App.css';
function ToDoList(props){
  const [tasks, setTasks] = useState([
    {
    id: 1,
    text: 'Task1',
    completed: true
    },
    {
    id: 2,
    text: 'Task2',
    completed: false
    }
    ]);
    
    const [text, setText] = useState('');
   function addTask(text) {
    const newTask = {
    id: Date.now(),
    text,
    completed: false
    };
    setTasks([...tasks, newTask]);
    setText('');
    }
    function deleteTask(id) {
      setTasks(tasks.filter(task => task.id !== id));
      }
     function toggleCompleted(id) {
      setTasks(tasks.map(task => {
      if (task.id === id) {
      return {...task, completed: !task.completed};
      } else {
      return task;
      } 
      }));
      }
     return (
      <>
      <div className="todo-list">
         <input className='inputbox'
      value={text} placeholder='Enter text'
      onChange={e => setText(e.target.value)} 
      />
     <button className='btn' onClick={() => addTask(text)}>+</button>
     </div>
      {tasks.map(task => (
      <ToDoItem
      key={task.id} 
      task={task}
      deleteTask={deleteTask}
      toggleCompleted={toggleCompleted} 
      />
      ))}
    </>

      );
   
}

export default ToDoList

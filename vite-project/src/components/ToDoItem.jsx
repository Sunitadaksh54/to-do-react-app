import { useState } from "react";
import '../App.css'
    function ToDoItem(props) {
        function handleChange() {
         props.toggleCompleted(props.task.id);
         }
         
         return (
         <div className="todo-item">
         <input className="checkbox"
         type="checkbox"
         checked={props.task.completed}
         onChange={handleChange}
         />
        <p>{props.task.text}</p>
        <button className="dlt" onClick={() => props.deleteTask(props.task.id)}>
         delete </button>
         </div>
         );
        }
    
  
export default ToDoItem;    

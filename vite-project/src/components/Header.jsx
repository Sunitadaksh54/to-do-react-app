import { useState } from "react";
import '../App.css'
function Header(props){
    const[ text, setText] = useState('');
    function eventHandler(){
        setText()
    }
    return(
        <div className="header">
           <h1>To-Do-List</h1>
           
        </div>
    )
}
export default Header ;
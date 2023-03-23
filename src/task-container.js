/*

This module will be responsible for creating the DOM elements of task elements and laying them out

*/

import TaskList from "./task-list.js";
import CompositeElement from "./composite-element.js";
import './styles/task-container-style.css';

export default (() =>{

    let taskList = new TaskList;

    function AddTask(){
        console.log('Adding task');
    }

    function ClearTasks(){
        console.log('Clearing tasks');
    }



    
    return{
        AddTask,
        ClearTasks,
    }
})();

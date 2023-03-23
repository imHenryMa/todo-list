import './styles/index-style.css'; //Importing CSS for index related items

import TaskContainer from './task-container.js';
import GroupContainer from './group-container.js';
import CompositeElement from './composite-element.js';
import TaskWindow from './task-window.js'



//Hooks up the task container to the relevant items
let but = document.querySelector('.add-task');
    but.addEventListener('click',TaskWindow.show);
    
let two = document.querySelector('.clear-tasks')
two.addEventListener('click',TaskWindow.hide);

function ClearTasks(){
    //Clear tasks from task container
    TaskContainer.ClearTasks();
}
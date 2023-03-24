import './styles/index-style.css'; //Importing CSS for index related items

import TaskContainer from './task-container.js';
import GroupContainer from './group-container.js';
import TaskWindow from './task-window.js'
import {Observer} from './observer.js';


//Hooks up the task buttons to the relevant items
document.querySelector('.add-task').addEventListener('click',TaskWindow.show);
document.querySelector('.clear-tasks').addEventListener('click',ClearTasks);

//Adds a listener for when the taskwindow completes filling in a task
let observer = new Observer('submit',TaskContainer.AddTask)
TaskWindow.submitSubject.attach(observer)

function ClearTasks(){
    //Clear tasks from task container
    TaskContainer.ClearTasks();

    //TODO: Remove the tasks in the container
}
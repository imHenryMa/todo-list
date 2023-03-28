import './styles/index-style.css'; //Importing CSS for index related items

import TaskContainer from './task-container.js';
import GroupContainer from './group-container.js';
import TaskWindow from './task-window.js'
import GroupWindow from './group-window.js'
import {Observer} from './observer.js';


//Hooks up the task buttons to the relevant items
document.querySelector('.add-task').addEventListener('click',TaskWindow.show);
document.querySelector('.clear-tasks').addEventListener('click',TaskContainer.ClearTasks);
document.querySelector('.add-group').addEventListener('click',GroupWindow.show);

//Adds a listener for when the taskwindow completes filling in a task
let taskObserver = new Observer('submit',TaskContainer.AddTask);
TaskWindow.submitSubject.attach(taskObserver)

//Adds a listener for when the groupWindow completes filling in a title
let groupObserver = new Observer('submit',GroupContainer.AddGroup);
GroupWindow.submitSubject.attach(groupObserver);

//Making a listener for when groups are toggled
let groupChangeObserverTaskWindow = new Observer('toggle',TaskWindow.SetCurrentGroup);
let groupChangeObserverTaskContainer = new Observer('toggle',TaskContainer.SwitchGroups);
GroupContainer.toggleSubject.attach(groupChangeObserverTaskWindow);
GroupContainer.toggleSubject.attach(groupChangeObserverTaskContainer);

//Making Default group and toggling to it
GroupContainer.AddGroup({title: 'Default'});
GroupContainer.ToggleGroup('Default');

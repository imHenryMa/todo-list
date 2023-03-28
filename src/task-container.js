/*

This module will be responsible for creating the DOM elements of task elements and laying them out

*/

import TaskList from "./task-list.js";
import CompositeElement from "./composite-element.js";
import './styles/task-container-style.css';

export default (() =>{

    let taskList = new TaskList;

    function AddTask(){
        console.log('AddTask is being called!');
        //Currently have no typecheck or verification.. so just assume everything is in proper format
        let details = arguments[0];

        //Add the items to the tasklist
        taskList.add(
            details.title,
            details.description,
            details.date,
            details.priority,
            '', //No notes for now
            false, //Assume when a task is added it isn't done
            details.group
        );

        CreateTaskElement(taskList.items[taskList.items.length-1])
    }

    function CreateTaskElement(currentTask){

                //Make the task DOM element and populate it with the necessary information
                console.log('TODO: Adding task');
                console.table(taskList.items);
        
                //Getting the the DOM element to add to the task list
                let parent = document.querySelector('.task-items');
        
                //Making the tasklist items
                let taskItems = ['title','description','dueDate','priority'];
                taskItems.forEach((key) => {
                    let element = new CompositeElement().create('span')
                        .setTextContent(currentTask[key])
                        .setCompositeAttribute('data-timestamp',currentTask.timeStamp)
                        .appendTo(parent);
                });
        
                //Adding the button to mark as complete
                new CompositeElement().create('button')
                    .setTextContent((currentTask.isDone) ? 'Complete' : 'Incomplete')
                    .setCompositeAttribute('data-timestamp',currentTask.timeStamp)
                    .setCompositeAttribute('style',(currentTask.isDone) ? 'background-color: #90EE90' : 'background-color: #FFCCCB')
                    .setEventListener('click',()=>{ToggleComplete(currentTask.timeStamp);})
                    .appendTo(parent);
        
                //Adding the button to delete
                new CompositeElement().create('button')
                .setTextContent('Delete')
                .setCompositeAttribute('data-timestamp',currentTask.timeStamp)
                .setEventListener('click',()=>{DeleteTask(currentTask.timeStamp);})
                .appendTo(parent); 
    }

    function ToggleComplete(timeStamp){

        //Get the task
        let task = taskList.items.find((task) => (task.timeStamp == timeStamp));

        //Get the button
        let button = document.querySelector(`button[data-timestamp='${task.timeStamp}']`)
        console.log(`The button is`);
        console.log(button);

        //If the task is already done, then mark as not done
        if(task.isDone){
            task.isDone = false;

            //Update the button accordingly
            button.textContent = 'Incomplete';
            button.style.backgroundColor='#FFCCCB'; //Too lazy to do it with css

            return;
        }

        //Mark task as complete
        task.isDone = true;
        //Update the button accordingly
        button.textContent = 'Complete';
        button.style.backgroundColor='#90EE90'; //Too lazy to do it with css

        return;
    }

    function DeleteTask(timeStamp){
        console.log('DeleteTask has been called!');

        //Remove the task
        taskList.remove(timeStamp);

        //Physically delete the DOM elements
        let test = document.querySelectorAll(`[data-timestamp='${timeStamp}']`);
        [...test].forEach((item) => item.remove());
    }

    function ClearTasks(hideOnly = false,projectTitle){

        let filteredTasks = 
        (projectTitle == undefined) ? 
            taskList.items 
        :
            taskList.items.filter((item) =>{
                return (item.group == projectTitle);
            })
        ;    
        
        filteredTasks.forEach((item) => {
            //Physically remove the items
            let test = document.querySelectorAll(`[data-timestamp='${item.timeStamp}']`);
            [...test].forEach((item) => item.remove());
        })

        if(hideOnly) return;

        //Clearing the task items by removing those not in the project
        taskList = taskList.items.filter((item) =>{
            return (item.group != projectTitle);
        });
    }

    function SwitchGroups(title){
        //When switching groups, hide the current list and then add tasks that match the groups
        ClearTasks(true);

        let filteredTasks = taskList.items.filter((item) =>{
            return (item.group == title);
        })

        console.table(filteredTasks);
        filteredTasks.forEach((task) => {
            CreateTaskElement(task);
        });
    }
    
    return{
        SwitchGroups,
        AddTask,
        ClearTasks,
    }
})();

/*

This module will be responsible for creating the DOM elements of group elements and laying them out

*/

import GroupList from "./group-list.js";
import CompositeElement from "./composite-element.js";
import './styles/group-container-style.css';
import {Subject} from './observer.js';

export default (() =>{

    let grouplist = new GroupList;

    //Observer-Subject pattern for when a group is toggled
    let toggleSubject = new Subject();

    function AddGroup(item){
        let title = item.title;
        console.log('AddGroup is being called!');

        //Add the items to the grouplist
        grouplist.add(title);

        //Make the group DOM element and populate it with the necessary information
        console.log('TODO: Adding group');
        console.table(grouplist.items);

        //Getting the the DOM element to add to the task list
        let parent = document.querySelector('.group-container');

        //Adding the group to the list
        new CompositeElement().create('button')
            .setTextContent(title)
            .setEventListener('click',()=>{ToggleGroup(title);})
            .setCompositeAttribute('data-title',title)
            .appendTo(parent);
    }

    function ToggleGroup(title){

        //Find the current green button and make it not green
        let currentButton = document.querySelector('button.current');
        if(currentButton) currentButton.classList.remove('current');

        //Find the button and turn it green
        let button = document.querySelector(`button[data-title='${title}']`);
        button.classList.add('current');

        //Actually filter out the task window groups
        toggleSubject.notify('toggle',title);
    }

    function DeleteGroup(timeStamp){
        //Remove the group from the data structure
        grouplist.remove(timeStamp);

        //Remove all tasks related to the group

        //Delete the group DOM elements

        //Switch to the Default Group
    }

    function ClearGroups(){
        //Remove all groups except the default group from data structures

        //Remove all tasks related to all groups (other than the default group)

        //Physically remove the group DOM elements

        //Physically remove all the task elements

        //Switch to the default group
    }
    
    return{
        toggleSubject,
        AddGroup,
        ClearGroups,
        DeleteGroup,
        ToggleGroup,
    }
})();

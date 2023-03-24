/*
    This module is responsible for creating DOM elements of the 'new task' window
    and all of its behaviour
*/

import './styles/task-window-style.css'; //Importing CSS for index related items
import CompositeElement from './composite-element.js';
import {Subject} from './observer.js';

export default (()=>{

    //Observer-Subject pattern for when 'Submit' button is pressed
    let submitSubject = new Subject();

    //TODO: HTML Form validation for the input items below

    //Creating the task window
    let window = new CompositeElement().create('div')
    .addClass('task-window');

    //Creating the title input
    let titleLabel = new CompositeElement().create('label')
        .setCompositeAttribute('for','Title')
        .appendTo(window.element)
        .setTextContent('Title');

    let title = new CompositeElement().create('input')
        .setCompositeAttribute('type','text')
        .setCompositeAttribute('id','Title')
        .appendTo(titleLabel.element);

    //Creating the description input
    let descriptionLabel = new CompositeElement().create('label')
        .setCompositeAttribute('for','Description')
        .appendTo(window.element)
        .setTextContent('Description');

    let description = new CompositeElement().create('input')
        .setCompositeAttribute('type','text')
        .setCompositeAttribute('id','Description')
        .appendTo(descriptionLabel.element);

    //Creating the date selection
    let dateLabel = new CompositeElement().create('label')
        .setCompositeAttribute('for','Date')
        .appendTo(window.element)
        .setTextContent('Date');

    let date = new CompositeElement().create('input')
        .setCompositeAttribute('type','date')
        .setCompositeAttribute('id','Date')
        .appendTo(dateLabel.element);

    //Creating the priority slider
    let priorityLabel = new CompositeElement().create('label')
        .setCompositeAttribute('for','Priority')
        .appendTo(window.element)
        .setTextContent('Priority');

    let priority = new CompositeElement().create('input')
        .setCompositeAttribute('type','range')
        .setCompositeAttribute('id','Priority')
        .setCompositeAttribute('step','1')
        .setCompositeAttribute('min','0')
        .setCompositeAttribute('max','2')
        .setValue('1')
        .appendTo(priorityLabel.element);

    //Creating the submit button
    new CompositeElement().create('button')
        .setCompositeAttribute('id','submit')
        .setTextContent('Submit')
        .setEventListener('click',notify)
        .appendTo(window.element);


    function notify(){
        //Collect all the form data into a single object
        let taskData = {
            title: title.getValue(),
            description: description.getValue(),
            date: date.getValue(),
            priority: priority.getValue(),
        }

        //TODO: Javascript Form validation for the input items above.
        //Check if valid options are present for each input. If not, then 
        //Have an error message and then return so that the functions below don't occur

        //call the submitSubject notify 
        console.table(taskData);
        submitSubject.notify('submit',taskData);

        //Clear the task window
        clear();

        //Hide the task window
        hide();
    }

    function show(){
        window.appendTo(document.querySelector('body'));
    }

    function clear(){
        title.setValue('');
        description.setValue('');
        date.setValue('');
        priority.setValue(1);
    }

    function hide(){
        window.element.remove();
    }

    return{
        submitSubject,
        show,
        hide,
    }
    
})();
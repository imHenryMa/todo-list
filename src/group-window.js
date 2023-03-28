/*
    This module is responsible for creating DOM elements of the 'new group' window
    and all of its behaviour
*/

import './styles/group-window-style.css'; //Importing CSS for index related items
import CompositeElement from './composite-element.js';
import {Subject} from './observer.js';

export default (()=>{

    //Observer-Subject pattern for when 'Submit' button is pressed
    let submitSubject = new Subject();

    //TODO: HTML Form validation for the input items below

    //Creating the group window
    let window = new CompositeElement().create('div')
    .addClass('group-window');

    //Creating the title input
    let titleLabel = new CompositeElement().create('label')
        .setCompositeAttribute('for','Title')
        .appendTo(window.element)
        .setTextContent('Title');

    let title = new CompositeElement().create('input')
        .setCompositeAttribute('type','text')
        .setCompositeAttribute('id','Title')
        .appendTo(titleLabel.element);

    //Creating the submit button
    new CompositeElement().create('button')
        .setCompositeAttribute('id','submit')
        .setTextContent('Submit')
        .setEventListener('click',notify)
        .appendTo(window.element);


    function notify(){
        //Collect all the form data into a single object
        let groupData = {
            title: title.getValue(),
        }

        //TODO: Javascript Form validation for the input items above.
        //Check if valid options are present for each input. If not, then 
        //Have an error message and then return so that the functions below don't occur

        //call the submitSubject notify 
        console.table(groupData);
        submitSubject.notify('submit',groupData);

        //Clear the group window
        clear();

        //Hide the group window
        hide();
    }

    function show(){
        window.appendTo(document.querySelector('body'));
    }

    function clear(){
        title.setValue('');
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
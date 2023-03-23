import './styles/task-window-style.css'; //Importing CSS for index related items
import CompositeElement from './composite-element.js';

export default (()=>{


    //Creating the task window
    let window = new CompositeElement().create('div')
    .addClass('task-window');

    //Creating the text options for the task window
    let options = [
        'Title',
        'Description',
    ];
    options.forEach((item) => {
        let label = new CompositeElement().create('label')
            .setCompositeAttribute('for',item)
            .appendTo(window.element)
            .setTextContent(item);

        new CompositeElement().create('input')
            .setCompositeAttribute('type','text')
            .setCompositeAttribute('id',item)
            .appendTo(label.element);
    });

    //Creating the date selection
    let dateLabel = new CompositeElement().create('label')
        .setCompositeAttribute('for','Date')
        .appendTo(window.element)
        .setTextContent('Date');

    new CompositeElement().create('input')
        .setCompositeAttribute('type','date')
        .setCompositeAttribute('id','Date')
        .appendTo(dateLabel.element);

    //Creating the priority slider
    let priorityLabel = new CompositeElement().create('label')
        .setCompositeAttribute('for','Priority')
        .appendTo(window.element)
        .setTextContent('Priority');

    new CompositeElement().create('input')
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
    .appendTo(window.element);

    function show(){
        window.appendTo(document.querySelector('body'));
    }

    function hide(){
        window.element.remove();
    }

    return{
        show,
        hide,
    }
    
})();
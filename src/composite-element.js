/*
The element compositor is to be used to make DOM elements quickly

Every function returns a CompositeElement so functions can be chained together
*/

export default function CompositeElement() {
    let element;

    function create(elementString){
        //Create a normal domElement but also give it the properties of a Composite Element
        this.element = document.createElement(elementString);
        this.element = Object.assign(this.element, new CompositeElement());
        return this;
    }

    function addClass(){
        for (let i = 0; i < arguments.length; i++) {
            this.element.classList.add(arguments[i]);
        }
        return this;
    }

    function setValue(value){
        this.element.value = value;

        return this;
    }

    function getValue(){
        return this.element.value;
    }

    function setTextContent(text){
        this.element.textContent=text;

        return this;
    }

    function setCompositeAttribute(){
        this.element.setAttribute(...arguments);

        return this;
    }

    function appendTo(parent){
        parent.appendChild(this.element);

        return this;
    }

    function setEventListener(){
            console.log(`Setting event listner for ${this.element.id}`);
            this.element.addEventListener(...arguments);

        return this;
    }

    return {
        element,
        create,
        getValue,
        addClass,
        appendTo,
        setValue,
        setTextContent,
        setEventListener,
        setCompositeAttribute,
    }
};

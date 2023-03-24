//Subject-Observer pattern

//Subject
export function Subject(){
    let observers = [];

    function attach(observer){
        //Don't add the observer if it already exists
        if(observers.includes(observer)) return;

        observers.push(
            {
                event: observer.event,
                response: observer.response,
            }
        );
    };

    function detach(observer){
        observers = observers.filter((items) => {
            items != observer;
        });
    }

    function notify(event,options){
        console.log(`Notifying subjects of ${event}`);
        observers.forEach((observer) =>{
            if(observer.event != event) return;

            observer.response(options);
        });
    }

    return{
        attach,
        detach,
        notify,
    };
}

//Observer
export function Observer(event, response){
    this.event = event;
    this.response = response;
}


/* 
    //Listener and event string for when a move is made
    const moveListener = {
        listener: document.createElement('div'),
        event: 'moveMade',
        };


        const moveCheck = document.createElement('div');
        moveListener.listener.appendChild(moveCheck);
        moveCheck.addEventListener(moveListener.event,(event)


const moveCheck = document.createElement('div');
moveListener.listener.appendChild(moveCheck);
moveCheck.addEventListener(moveListener.event,(event)


*/
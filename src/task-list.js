/*
    Tasklist is a class meant to keep track of the list of tasks
*/

export default function TaskList(){
    this.items = [];
};

TaskList.prototype.add = function(title,description,dueDate,priority,notes,isDone){
    console.log('Adding to tasklist');
    let task = {
        title,
        description,
        dueDate,
        priority,
        notes,
        isDone,
        timeStamp: Date.now()
    };
    this.items.push(task);
}

TaskList.prototype.remove = function(timeStamp){
    console.log('Removing from tasklist');
    this.items = this.items.array.filter((element) => {
        element.timeStamp != timeStamp;
    });
}

TaskList.prototype.clear = function(){
    console.log('Clearing tasklist');
    this.items = [];
};

TaskList.prototype.load = function(){
    console.log('TODO');
}
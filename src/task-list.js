/*
    Tasklist is a class meant to keep track of the list of tasks
*/

export default function TaskList(){
    this.items = [];
};

TaskList.prototype.add = function(title,description,dueDate,priority,notes,isDone,group){
    console.log('Adding to tasklist');
    let task = {
        title,
        description,
        dueDate,
        priority,
        notes,
        isDone,
        timeStamp: Date.now(),
        group
    };
    this.items.push(task);
}

TaskList.prototype.remove = function(timeStamp){
    console.log(`Removing from tasklist: ${timeStamp}`);
    this.items = this.items.filter((element) => (element.timeStamp != timeStamp));
}

TaskList.prototype.clear = function(){
    console.log('Clearing tasklist');
    this.items = [];
};

TaskList.prototype.load = function(){
    console.log('TODO');
}
/*
    Grouplist is a class meant to keep track of the list of groups
*/

export default function GroupList(){
    this.items = [];
};

GroupList.prototype.add = function(title){
    this.items.push(title);
}

GroupList.prototype.remove = function(title){
    this.items = this.items.filter((element) => {
        element != title;
    });
}

GroupList.prototype.clear = function(){
    console.log('Clearing group list');
    this.items = [];
};

GroupList.prototype.load = function(){
    console.log('TODO');
}
// ToDo list
// this will store the list
var toDoList = [];
// counts how many items have been added to the list
var count=0;


//this function creates a toDo to add to the toDo list which will now become an array of objects
// when adding a task to the todo list it will always set completed as false
function createToDO(mytitle,mytime){
var task={

Title: mytitle,
Time: mytime,
completed: false
	}
 // pushing the object task into the array toDoList
toDoList.push(task);
count++;
// console.log(toDoList);
// calling the method showAll();
showAll();
}

// this function will show all toDo's in the list
function showAll(){
for (var i =0; i< toDoList.length;i++){
	console.log("Title: " + toDoList[i].Title + " \n Time: "+ toDoList[i].Time + "\n Completed: " + toDoList[i].completed);
	}
}

/* this method is looking for an index or string to remove the task from the 
todo list
splice will remove the task selected and show the removed task */
function removeToDo(x){
// checks for index
if(typeof x === "number") {
console.log("You have removed: " + toDoList[x].Title + "\n Time: "+ toDoList[x].Time + "\n Completed: " + toDoList[x].completed)
	toDoList.splice(x,1);
}
// check for string
if(typeof x === "string"){
	for(var i = 0; i<toDoList.length;i++){
if (toDoList[i].Title === x){ 
	console.log("You have removed: " + toDoList[i].Title + "\n  Time: " + toDoList[i].Time + "\n Completed: " + toDoList[i].completed)
			toDoList.splice(x, 1) }
}
}
}
// this method removes all toDo's setting the array empty
function removeAllToDos(){
toDoList=[];
}console.log(toDoList);

// this method will show all uncompleted todo's
function showUncomplete() {
    for (var i = 0; i < toDoList.length;i++){
        if (toDoList[i].completed === false){
            console.log("Title: " + toDoList[i].Title + "\n Time: " + toDoList[i].Time + "\n Completed: " + toDoList[i].completed);
        }
    }

}
// this method will show completed todo's
function showComplete() {
    for (var i = 0; i < toDoList.length;i++){
        if (toDoList[i].completed === true){
            console.log("Title: " + toDoList[i].Title + "\n Time: " + toDoList[i].Time + "\n Completed: " + toDoList[i].completed);

		}
	}
}
/* this function marks a todo as completed by 
passing the string or the index number and then sets the completed to true*/
function markAsCompleted(x){
// this is looking for an integer 
	if(typeof x === "number") {
	console.log("You have marked: " + toDoList[x].Title + " as completed");
	toDoList[x].completed = true;
}
// this one is looking for a string 
if(typeof x === "string"){
	for(var i = 0; i<toDoList.length;i++){
		if (toDoList[i].Title === x){ 
			console.log("You have marked: " + toDoList[i].Title + " as completed");
		toDoList[i].completed = true; 
	}
	}
}

}

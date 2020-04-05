//Christopher Ermel
//200250446
//setting up an array for the tasks
let taskList = [];

function addTask(){
	//grab the input feild content.
	let task = document.getElementById("taskInput").value;
	//add the task to the list, so we cant have duplicate tasks...
	if(taskList.includes(task)){
		alert("Duplicate Tasks Will Not Be Added!");
		return
	}
	//No tasks can start with a number!
	if(task.match(/^\d/)){
		alert("Tasks Cannot Start with Numbers!");
		return
	}	
	taskList.push(task);
	createElement(task);
}

function createElement(task){
	//This will create an input/check box element with the task's name and also a delete button
	//On the click of the delete button the P element will get removed and also the Button will get removed.
	//Based on the tasks name.
	//It will then be removed from the tasks array list. Incase the user wants to readd another task.
	let taskString = "<p id='"+task+"' class='allTasks'><input type='checkbox' class='checkBox' onchange='taskChecked(\""+task+"\");'>"+task+"</input><button id='deleteButton' onclick='this.remove(); removeTaskList(\""+task+"\");'>Delete</button></p>";
	//This will add the new element to the html/dom
	document.getElementById('taskWrapper').innerHTML += taskString;
}

function removeTaskList(task){
	//Find the index of the task that will be removed
	let index = taskList.indexOf(task);
	//remove the task from the array.
	taskList.splice(index,1);
	//This will remove the paragram/task line 
	let taskId = document.getElementById(task);
	taskId.remove(); 
}

function taskChecked(task){
	//using the task id to grab the correct task
	let taskChecked = document.getElementById(task);
	//Getting the last P element from the task list so we can move the tasks up and down the list.
	let lastP = document.getElementById("taskWrapper").lastElementChild;
	let firstP = document.getElementById("taskWrapper").firstElementChild;
	//This will determine if the checkbox is checked or not, and will 
	//move the task and the line-through depending on the state.
	//We can use the event thats passed by default as the target to see if it is checked or not.
	if (event.target.checked == true){
		//line through task
	    taskChecked.style.textDecoration = "line-through";
	    //adding it to the class with the line through so we can change it with css
	    taskChecked.classList.add('lineThrough');
	    //move this task to the bottom of the list of tasks.
	    lastP.after(taskChecked);
	  } else {
	  	//remove the line through task
	    taskChecked.style.textDecoration = "none";
	    //removing it from the class
	    taskChecked.classList.remove('lineThrough');
	    //move this task to the top of the list of tasks.
	    firstP.before(taskChecked);	    
	  }
}
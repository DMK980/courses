// Defining variables to access data

// user input
const taskInput = document.getElementById("taskInput");

// buttons
const addTaskBtn = document.getElementById("addTaskBtn");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const clearAllBtn = document.getElementById("clearAllBtn");

// to do list container
const taskList = document.getElementById("taskList");

// to do list
let task = [];

// add task
function addTask(){
    const taskText = taskInput.value.trim();
    if(taskText !== ""){
        task.push({text: taskText});
        taskInput.value = "";
        displayTasks();
    }
}

// display tasks
function displayTasks(){
    // resetting the tasks container 
    taskList.innerHTML = "";

    // traversing tasks in list
    task.forEach((task,index)=>{

        // creating list element
        const li = document.createElement("li");
        
        // populating the list element
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked": ""}>
        <label for="task-${index}">${task["text"]}</label>`;

        // checking to see when task is completed
        li.querySelector("input").addEventListener("change",()=>toggleTask(index));

        // adding task to to do list
        taskList.appendChild(li);

    })
}

// toggle task completed
function toggleTask(index){

    // toggle complete
    task[index].completed = !task[index].completed;

    // re display tasks
    displayTasks();
}

// clear completed tasks
function clearCompletedTasks(){
    task = task.filter(task=> !task.completed);
    displayTasks();
}

// clear all tasks
function clearAllTasks(){
    task = [];
    displayTasks()
}

// button events
addTaskBtn.addEventListener("click",addTask);
clearCompletedBtn.addEventListener("click",clearCompletedTasks);
clearAllBtn.addEventListener("click",clearAllTasks);


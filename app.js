//h1 selector
const listHead = document.querySelector('h1')

//text input selector
const taskInput = document.querySelector('#taskInput');

//button selectors
const addTaskBtn = document.querySelector('#addTaskBtn');
const removeTaskBtn = document.querySelector('#removeTaskBtn');
const sortTaskBtn = document.querySelector('#sortTaskBtn');

//variable to capture the text inputed into the text input. Trying to see if its better to create the var here and call it later, or create it within functions. *disabling. this causes more issues 
// let textValue = taskInput.value;

//empty array, this is the wrapper for my to do list
const toDoList = [];

//function that takes the text inside the text input, and add it to the end of the to do list array.
const addTask = ()=> {
    let textValue = taskInput.value;
    toDoList.push(textValue);
};

//need to figure out how we are going to create and display the tasks...
//function that should console.log each item in the array
const logTasks = ()=>{
    toDoList.forEach((el) => console.log(el));
};



//function to clear the text input field
const clearText = ()=> {
    taskInput.value = '';
};

//function or functions to sort alphabetically 

//adds the text in the text input to the array
addTaskBtn.addEventListener('click', addTask);
//clears text input on task add
addTaskBtn.addEventListener('click', clearText);
//clears text input on load/refresh
window.addEventListener('load', clearText);
//execute console log array function on add btn click
addTaskBtn.addEventListener('click', logTasks);








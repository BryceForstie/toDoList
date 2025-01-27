//list selector (should select the section containing all of the tasks)
const taskList = document.querySelector('#taskList');

//h1 selector
const listHead = document.querySelector('h1')

//text input selector
const taskInput = document.querySelector('#taskInput');

//button selectors
const addTaskBtn = document.querySelector('#addTaskBtn');
const removeTaskBtn = document.querySelector('#removeTaskBtn');
const sortTaskBtn = document.querySelector('#sortTaskBtn');

const taskNumDisplay = document.querySelector('#taskNumDisplay');

//empty array, this is the wrapper for my to do list
const toDoList = [];

//variable that stores the amount of current tasks
let numOfTasks = 0;

//function that takes the text inside the text input, and add it to the end of the to do list array.
const addTask = ()=> {
    if (taskInput.value === '') {
        taskInput.placeholder = 'Cannot be blank!'
    } else {
    numOfTasks++;
    taskNumDisplay.textContent = `Number of current tasks: ${numOfTasks}`;
    let textValue = taskInput.value;
    toDoList.push(textValue);
    }
};

//function that creates spans with input field info
const createTask = () => {
    const newTask = document.createElement('p');
    newTask.textContent = taskInput.value;
    taskList.appendChild(newTask);
}

//function to clear the text input field
const clearText = ()=> {
    taskInput.value = '';
};

//function or functions to sort alphabetically 

//adds the text in the text input to the array
addTaskBtn.addEventListener('click', addTask);

//executes the createTask function
addTaskBtn.addEventListener('click', createTask);

//clears text input on task add
addTaskBtn.addEventListener('click', clearText);

//clears text input on load/refresh
window.addEventListener('load', clearText);









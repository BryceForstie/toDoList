// list selector (should select the section containing all of the tasks)
const taskList = document.querySelector('#taskList');

// h1 selector
const listHead = document.querySelector('h1')

// text input selector
const taskInput = document.querySelector('#taskInput');

// button selectors
const addTaskBtn = document.querySelector('#addTaskBtn');
const removeTaskBtn = document.querySelector('#removeTaskBtn');
const sortTaskBtn = document.querySelector('#sortTaskBtn');

// task # display selector
const taskNumDisplay = document.querySelector('#taskNumDisplay');

// empty array, this is the wrapper for my to do list
const toDoList = [];

// variable that stores the amount of current tasks
let numOfTasks = 0;

// function that takes the text inside the text input, and add it to the end of the to do list array.
// also updates adds 1 to numOfTasks, changes the display text for number of tasks,
const addTask = ()=> {
    // check for blank textbox. loops here until there is something in the textbox
    if (taskInput.value === '') {
        taskInput.placeholder = 'Cannot be blank!'
    // function continues with text
    } else {
    // adding 1 to numOfTasks for future use
    numOfTasks++;
    // Updates # of tasks display
    taskNumDisplay.textContent = `Number of current tasks: ${numOfTasks}`;
    // add the task to array
    toDoList.push(taskInput.value);
    
    // div that holds everything
    const newTask = document.createElement('div');
    newTask.id = `task${numOfTasks}`;
    
    // checkbox for task description
    const taskCheckBox = document.createElement('input');
    taskCheckBox.type = 'checkbox';
    taskCheckBox.id = `taskCheckBox${numOfTasks}`;

    // task description
    const taskDescription = document.createElement('label');
    taskDescription.htmlFor = `taskCheckBox${numOfTasks}`
    taskDescription.textContent = taskInput.value;

    // appending checkbox and task description to div, then append div to task list
    newTask.appendChild(taskCheckBox);
    newTask.appendChild(taskDescription);
    taskList.appendChild(newTask);
    taskInput.placeholder = 'enter a task';
    taskInput.placeholder = 'enter a task';
    }
};

// function to clear the text input field
const clearText = ()=> {
    taskInput.value = '';
};

// function to delete checked items 
// need to check if each task is checked, if its checked - delete the task.
const removeTask = ()=> {
    for (let i = 0; i < numOfTasks; i++) {
    if (document.querySelector(`#taskCheckBox${i+1}`).checked) {
        document.querySelector(`#task${i+1}`).remove();
        i = 0;
    }
}
}

// function or functions to sort alphabetically 

// adds the text in the text input to the array
addTaskBtn.addEventListener('click', addTask);
// clears text input on task add
addTaskBtn.addEventListener('click', clearText);
// clears text input on load/refresh
window.addEventListener('load', clearText);
// executes remove task function on remove btn click
removeTaskBtn.addEventListener('click', removeTask);









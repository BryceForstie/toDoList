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

//add an object to array
const addTask = ()=> {
    // check for blank textbox. loops here until there is something in the textbox
    if (taskInput.value === '') {
        taskInput.placeholder = 'Cannot be blank!'
    // function continues with text
    } else {
    // add the task to array
    const newTask = {
        taskText : taskInput.value,
        checked : false,
    }
    toDoList.push(newTask);
    taskInput.placeholder = 'enter a task';
    }
};

const displayTask = ()=> {
        for (let i = 0; i < toDoList.length+1; i++) {
            if (taskInput.value === '') {
                taskInput.placeholder = 'Cannot be blank!'
            } else if (i === toDoList.length) {
        const newTaskDisplay = document.createElement('div');
        newTaskDisplay.id = `display${i}`
        const displayCheckBox = document.createElement('input');
        displayCheckBox.type = 'checkbox';
        displayCheckBox.id = `checkboxTask${i}`
        const displayText = document.createElement('label');
        displayText.id = `taskText${i}`
        displayText.htmlFor = `checkboxTask${i}`; 
        displayText.textContent = toDoList[i-1].taskText;
        newTaskDisplay.appendChild(displayCheckBox);
        newTaskDisplay.appendChild(displayText);
        taskList.appendChild(newTaskDisplay);
        };
    };
};

// function to clear the text input field
const clearText = ()=> {
    taskInput.value = '';
};

// adds the text in the text input to the array
addTaskBtn.addEventListener('click', addTask);
// clears text input on load/refresh
window.addEventListener('load', clearText);
// executes display task on add btn click
addTaskBtn.addEventListener('click', displayTask);
// clears text input on task add
addTaskBtn.addEventListener('click', clearText);










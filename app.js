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

//function to store task element creations, and also append them to the todolist section
const displayTask = ()=> {
        for (let i = 0; i < toDoList.length+1; i++) {
            if (taskInput.value === '') {
                taskInput.placeholder = 'Cannot be blank!'
            } else if (i === toDoList.length) {
        //variable that stores div creation
        const newTaskDisplay = document.createElement('div');
        newTaskDisplay.classList.add('taskDiv');
        newTaskDisplay.id = `taskDiv${i}`;
        //variable that store checkbox creation
        const displayCheckBox = document.createElement('input');
        displayCheckBox.classList.add('checkboxTask');
        displayCheckBox.type = 'checkbox';
        displayCheckBox.id = `checkboxTask${i}`
        //variabe that stores label creation
        const displayText = document.createElement('label');
        displayText.id = `taskText${i}`
        displayText.htmlFor = `checkboxTask${i}`; 
        displayText.textContent = toDoList[i-1].taskText;
        //actually adding the classes now
        newTaskDisplay.appendChild(displayCheckBox);
        newTaskDisplay.appendChild(displayText);
        taskList.appendChild(newTaskDisplay);
        };
    };
};

//stores all checkboxes in a variable for later use 
const checkboxs = document.getElementsByClassName('checkboxTask');

//function to remove checked tasks
const removeTask = () => {
    for (let i = 0; i<toDoList.length; i++) {
        if (document.querySelector(`#checkboxTask${i+1}`).checked) {
            document.querySelector(`#taskDiv${i+1}`).remove();
        }
    }
};

//function to re-write ids so above code works
const rewriteId = () => {
    for (let i = 0; i<toDoList.length; i++) {
        newTaskDisplay.id = `taskDiv${i}`;
        displayCheckBox.id = `checkboxTask${i}`;
        displayText.id = `taskText${i}`;
        displayText.htmlFor = `checkboxTask${i}`; 
    }
}

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
// removes the checked tasks
removeTaskBtn.addEventListener('click', removeTask);
// rewrites the ids of a existing elements on removeTask click
removeTaskBtn.addEventListener('click', rewriteId);










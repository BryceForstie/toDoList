// list selector (should select the section containing all of the tasks)
const taskList = document.querySelector('#taskList');
// h1 selector
const listHead = document.querySelector('h1');
// text input selector
const taskInput = document.querySelector('#taskInput');
// button selectors
const addTaskBtn = document.querySelector('#addTaskBtn');
const completeBtn = document.querySelector('#completeBtn');
const removeTaskBtn = document.querySelector('#removeTaskBtn');
const sortTaskBtn = document.querySelector('#sortTaskBtn');
// task # display selector
const taskNumDisplay = document.querySelector('#taskNumDisplay');
// empty array, this is the wrapper for my to do list
const toDoList = [];
// another empty array I use this later to store unchecked items
const updatedToDoList = [];
// variable that selects all divs 
const allTaskDisplays = document.querySelectorAll('div');
// variable that selects all checkboxes
const allCheckBoxes = document.querySelectorAll('.checkboxTask')
// stores number of checked checkboxes in a var
let numOfChecked = 0;

// add an object to array
function addTask() {
    // check for blank textbox. loops here until there is something in the textbox
    if (taskInput.value === '') {
        taskInput.placeholder = 'Cannot be blank!';
        // function continues with text
    } else {
        // add the task to array with the text typed in the input 
        const newTask = taskInput.value;
        toDoList.push(newTask);
        taskInput.placeholder = 'enter a task';
    };
};

//function to store task element creations, and also append them to the todolist section
function displayTask() {
    for (let i = 0; i < toDoList.length + 1; i++) {
        if (taskInput.value === '') {
            taskInput.placeholder = 'Cannot be blank!';
        } else if (i === toDoList.length) {
            // variable that stores div creation
            const newTaskDisplay = document.createElement('div');
            newTaskDisplay.classList.add('taskDiv');
            newTaskDisplay.id = `taskDiv${i}`;
            // variable that store checkbox creation
            const displayCheckBox = document.createElement('input');
            displayCheckBox.classList.add('checkboxTask');
            displayCheckBox.type = 'checkbox';
            displayCheckBox.id = `checkboxTask${i}`;
            // variabe that stores label creation
            const displayText = document.createElement('label');
            displayText.id = `taskText${i}`;
            displayText.htmlFor = `checkboxTask${i}`;
            displayText.textContent = toDoList[i - 1];
            // actually adding the classes now
            newTaskDisplay.appendChild(displayCheckBox);
            newTaskDisplay.appendChild(displayText);
            taskList.appendChild(newTaskDisplay);
        };
    };
}

// function to clear the text input field
const clearText = ()=> {
    taskInput.value = '';
};

// function to count num of checked items
function countChecked() {
    for (let i = 0; i<toDoList.length; i++) {
        if (document.querySelector(`#checkboxTask${i+1}`).checked) {
            numOfChecked++;
        };
    };
};

// function to clear numOfChecked 
function wipeNumOfChecked() {
    numOfChecked = 0;
};

// creates a new array with the values of tasks that are not checked
function createUpdatedArray() {
    for (let i = 0; i<toDoList.length; i++) {
        // I dont want this to run if nothing is checked
        if (numOfChecked === 0) {
            taskInput.placeholder = 'No Checked Items';
        } else if (document.querySelector(`#checkboxTask${i+1}`).checked === false) {
            updatedToDoList.push(toDoList[i]);
        };
    };
};

// removes everything from the toDoList array
function wipeToDoList() {
     // I dont want this to run if nothing is checked
     if (numOfChecked === 0) {
        taskInput.placeholder = 'No Checked Items';
    } else {
    toDoList.length = 0;
    }
};

// updates toDoList array with values in the new array I created with unchecked values
function updateToDoList() {
     // I dont want this to run if nothing is checked
     if (numOfChecked === 0) {
        taskInput.placeholder = 'No Checked Items';
    } else {
    for (let i = 0; i<updatedToDoList.length; i++) {
        toDoList.push(updatedToDoList[i])
        };
    };
};

// removes everything from the updatedToDoList
function wipeUpdatedToDoList() {
     // I dont want this to run if nothing is checked
     if (numOfChecked === 0) {
        taskInput.placeholder = 'No Checked Items';
    } else {
    updatedToDoList.length = 0;
    };
};

// removes all divs on page
function removeTaskDisplays() {
     // I dont want this to run if nothing is checked
     if (numOfChecked === 0) {
        taskInput.placeholder = 'No Checked Items';
    } else {
    taskList.innerHTML = '';
    };
};

// adds new task displays with the updated toDoList
function updatedDisplayTask() {
     // I dont want this to run if nothing is checked
     if (numOfChecked === 0) {
        taskInput.placeholder = 'No Checked Items';
    } else {
    for (let i = 0; i < toDoList.length; i++) {
            //variable that stores div creation
            const newTaskDisplay = document.createElement('div');
            newTaskDisplay.classList.add('taskDiv');
            newTaskDisplay.id = `taskDiv${i+1}`;
            //variable that store checkbox creation
            const displayCheckBox = document.createElement('input');
            displayCheckBox.classList.add('checkboxTask');
            displayCheckBox.type = 'checkbox';
            displayCheckBox.id = `checkboxTask${i+1}`;
            //variabe that stores label creation
            const displayText = document.createElement('label');
            displayText.id = `taskText${i+1}`;
            displayText.htmlFor = `checkboxTask${i+1}`;
            displayText.textContent = toDoList[i];
            //actually adding the classes now
            newTaskDisplay.appendChild(displayCheckBox);
            newTaskDisplay.appendChild(displayText);
            taskList.appendChild(newTaskDisplay);
        };
    };
};

// updates the placeholder back to default
function updatePlaceHolder() {
    if(numOfChecked>0) {
    taskInput.placeholder = 'enter a task';
    };
};

// function that applys a complete class to elements that are checked
function markComplete() {
    for (let i = 0; i<toDoList.length; i++) {
        if (document.querySelector(`#checkboxTask${i+1}`).checked) {
            document.querySelector(`#taskDiv${i+1}`).classList.add('completeTask')
        };
    };
};

// function to uncheck all
function uncheckAll() {
    for (let i = 0; i<toDoList.length; i++) {
        document.querySelector(`#checkboxTask${i+1}`).checked = false;
    };
};

// tryna make add work on enter click as well


// adds the text in the text input to the array
addTaskBtn.addEventListener('click', addTask);
// clears text input on load/refresh
window.addEventListener('load', clearText);
// executes display task on add btn click                          
addTaskBtn.addEventListener('click', displayTask);
// clears text input on task add
addTaskBtn.addEventListener('click', clearText);



// counts # of checked items when remove button is clicked 
removeTaskBtn.addEventListener('click', countChecked);
// add the unchecked items of the toDoList to a new array
removeTaskBtn.addEventListener('click', createUpdatedArray);
// wipes toDoList after creating the second updated array 
removeTaskBtn.addEventListener('click', wipeToDoList);
// pushes items of second updated array to toDoList
removeTaskBtn.addEventListener('click', updateToDoList);
// wipes updated toDoList so we can update it again as needed 
removeTaskBtn.addEventListener('click', wipeUpdatedToDoList);
// removes all task displays on remove button click
removeTaskBtn.addEventListener('click', removeTaskDisplays);
// adds new task displays with current array info 
removeTaskBtn.addEventListener('click', updatedDisplayTask);
// updates placeholder back to default after removing items (only happens if items are removed)
removeTaskBtn.addEventListener('click', updatePlaceHolder);
// changes numOfChecked back to 0 after everything else that happens on remove btn click
removeTaskBtn.addEventListener('click', wipeNumOfChecked);


// adds complete class to labels that have a checked checkbox on complete btn click
completeBtn.addEventListener('click', markComplete);














// list selector (should select the section containing all of the tasks)
const taskList = document.querySelector('#taskList');

// h1 selector
const listHead = document.querySelector('h1');

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
// another empty array I use this later to store unchecked items
const updatedToDoList = [];
// variable that selects all divs 
const allTaskDisplays = document.querySelectorAll('div');
// variable that selects all checkboxes
const allCheckBoxes = document.querySelectorAll('.checkboxTask')

//add an object to array
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
    }
}

//function to store task element creations, and also append them to the todolist section
function displayTask() {
    for (let i = 0; i < toDoList.length + 1; i++) {
        if (taskInput.value === '') {
            taskInput.placeholder = 'Cannot be blank!';
        } else if (i === toDoList.length) {
            //variable that stores div creation
            const newTaskDisplay = document.createElement('div');
            newTaskDisplay.classList.add('taskDiv');
            newTaskDisplay.id = `taskDiv${i}`;
            //variable that store checkbox creation
            const displayCheckBox = document.createElement('input');
            displayCheckBox.classList.add('checkboxTask');
            displayCheckBox.type = 'checkbox';
            displayCheckBox.id = `checkboxTask${i}`;
            //variabe that stores label creation
            const displayText = document.createElement('label');
            displayText.id = `taskText${i}`;
            displayText.htmlFor = `checkboxTask${i}`;
            displayText.textContent = toDoList[i - 1];
            //actually adding the classes now
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

// creates a new array with the values of tasks that are not checked
function createUpdatedArray() {
    for (let i = 0; i<toDoList.length; i++) {
        if (document.querySelector(`#checkboxTask${i+1}`).checked === false) {
            updatedToDoList.push(toDoList[i]);
        };
    };
};

// removes everything from the toDoList array
function wipeToDoList() {
    toDoList.length = 0;
};

// updates toDoList array with values in the new array I created with unchecked values
function updateToDoList() {
    for (let i = 0; i<updatedToDoList.length; i++) {
        toDoList.push(updatedToDoList[i])
    };
};

// removes everything from the updatedToDoList
function wipeUpdatedToDoList() {
    updatedToDoList.length = 0;
};

// removes all divs on page
function removeTaskDisplays() {
    taskList.innerHTML = '';
};

// adds new task displays with the updated toDoList
function updatedDisplayTask() {
    for (let i = 0; i < toDoList.length + 1; i++) {
        if (i === toDoList.length) {
            //variable that stores div creation
            const newTaskDisplay = document.createElement('div');
            newTaskDisplay.classList.add('taskDiv');
            newTaskDisplay.id = `taskDiv${i}`;
            //variable that store checkbox creation
            const displayCheckBox = document.createElement('input');
            displayCheckBox.classList.add('checkboxTask');
            displayCheckBox.type = 'checkbox';
            displayCheckBox.id = `checkboxTask${i}`;
            //variabe that stores label creation
            const displayText = document.createElement('label');
            displayText.id = `taskText${i}`;
            displayText.htmlFor = `checkboxTask${i}`;
            displayText.textContent = toDoList[i - 1];
            //actually adding the classes now
            newTaskDisplay.appendChild(displayCheckBox);
            newTaskDisplay.appendChild(displayText);
            taskList.appendChild(newTaskDisplay);
        };
    };
};

// checkbox thing
function checkBoxThing() {
    if (this.checked) {
        console.log('checked');
    } else {
        console.log('unchcked');
    }
}

// adds the text in the text input to the array
addTaskBtn.addEventListener('click', addTask);
// clears text input on load/refresh
window.addEventListener('load', clearText);
// executes display task on add btn click                          
addTaskBtn.addEventListener('click', displayTask);
// clears text input on task add
addTaskBtn.addEventListener('click', clearText);
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
// checkbox thing
allCheckBoxes.addEventListener('change', checkBoxThing);










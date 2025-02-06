//need to fix
//if task starts with a #, it will be removed on sort. most tasks shouldnt start with a #, but thats up to user so I need to fix
//this happens becauase my function to sort only checks for letters, and pushes those items. does nothing with #s

//want to add: 
//uncheck all items on escape key click
//placeholder update when no items are checked when clicking mark as complete
//buttons that appear on the div when checked (remove, mark as complete, mark as incomplete)

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
const allCheckBoxes = document.querySelectorAll('.checkboxTask');
// stores number of checked checkboxes in a var
let numOfChecked = 0;
// array the contains the alphabet. going to use for sorting 
const alphabetLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// blank sorted array var
const sortedArray = [];

// add an object to array
function addTask() {
    // IMPORTANT - no looping happens, remind me to discuss this with you.
    // Functions run synchronously, once. Unless they are async.
    // The only way you end up with a loop is something like a for loop, while loop, or recursion (a concept I can explain)

    // check for blank textbox. loops here until there is something in the textbox
    if (taskInput.value === '') {
        // Placeholder is meant to be an example, not meant to convey messaging.
        // taskInput.placeholder = 'Cannot be blank!';
        // function continues with text
    } else {
        // add the task to array with the text typed in the input 
        const newTask = taskInput.value;
        toDoList.push(newTask);
        // taskInput.placeholder = 'enter a task';
    };
};

// I made some basic comments throughout. I saw that you came up with some unique strategies to sort, and that's a good thing! Better to think than just copy.
// However, I won't bother commenting on most of the logic because we will just have to walk through it together so you can explain your thought process.
// Big picture, it should look something like this:
// const tasks = [
//         'Whatever the user types',
//         'Another task'
// ]
// To add an item you can use tasks.push
// To remove an item you can use tasks.splice or tasks.slice
// To sort you can run tasks.sort((a, b) => a - b);
// I am genuinely happy that you did it the way you did though. Way more learning.
// Don't bother fixing yet, I want to talk this through with you and also you can do some other stuff along with the fixes

//function to store task element creations, and also append them to the todolist section
function displayTask() {
    for (let i = 0; i < toDoList.length + 1; i++) {
        if (taskInput.value === '') {
            // taskInput.placeholder = 'Cannot be blank!';
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
const clearText = () => {
    taskInput.value = '';
};

// function to count num of checked items
function countChecked() {
    for (let i = 0; i < toDoList.length; i++) {
        if (document.querySelector(`#checkboxTask${i + 1}`).checked) {
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
    for (let i = 0; i < toDoList.length; i++) {
        if (document.querySelector(`#checkboxTask${i + 1}`).checked === false) {
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
    for (let i = 0; i < updatedToDoList.length; i++) {
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
    for (let i = 0; i < toDoList.length; i++) {
        //variable that stores div creation
        const newTaskDisplay = document.createElement('div');
        newTaskDisplay.classList.add('taskDiv');
        newTaskDisplay.id = `taskDiv${i + 1}`;
        //variable that store checkbox creation
        const displayCheckBox = document.createElement('input');
        displayCheckBox.classList.add('checkboxTask');
        displayCheckBox.type = 'checkbox';
        displayCheckBox.id = `checkboxTask${i + 1}`;
        //variabe that stores label creation
        const displayText = document.createElement('label');
        displayText.id = `taskText${i + 1}`;
        displayText.htmlFor = `checkboxTask${i + 1}`;
        displayText.textContent = toDoList[i];
        //actually adding the classes now
        newTaskDisplay.appendChild(displayCheckBox);
        newTaskDisplay.appendChild(displayText);
        taskList.appendChild(newTaskDisplay);
    };
};

// updates the placeholder back to default
// function updatePlaceHolder() {
//     if (numOfChecked > 0) {
//         taskInput.placeholder = 'enter a task';
//     };
// };

// function that applys a complete class to elements that are checked
function markTaskComplete() {
    for (let i = 0; i < toDoList.length; i++) {
        if (document.querySelector(`#checkboxTask${i + 1}`).checked) {
            document.querySelector(`#taskDiv${i + 1}`).classList.add('completeTask')
        };
    };
};

// This is never called
// function to uncheck all
function uncheckAll() {
    for (let i = 0; i < toDoList.length; i++) {
        document.querySelector(`#checkboxTask${i + 1}`).checked = false;
    };
};

// function to create a new array that is alphabetically sorted
function createSortedArray() {
    for (let i = 0; i < alphabetLetters.length; i++) {
        for (let n = 0; n < toDoList.length; n++) {
            // A for loop inside a for loop is almost always a red flag in computer science. Remind me to explain compute complexity to you.
            if (toDoList[n][0].toLowerCase() === alphabetLetters[i]) {
                sortedArray.push(toDoList[n]);
            };
        };
    };
};

// function to push sorted array to toDoList
function sortUpdateToDoList() {
    for (let i = 0; i < sortedArray.length; i++) {
        toDoList.push(sortedArray[i]);
    };
};

// function to wipe sortedArray
function wipeSortedArray() {
    sortedArray.length = 0;
};

// or setEventListeners
const onLoad = () => {
    // ========
    // You shouldn't put multiple of the same event listeners for the same item.
    // Instead, make a single function out of them
    // If you had different event listeners it would make sense, like: click, mouseover, onmousedown. But one function per listener.
    // ========

    // adds the text in the text input to the array
    addTaskBtn.addEventListener('click', () => {
        addTask();
        displayTask();
        clearText();
    });

    // clears text input on load/refresh
    window.addEventListener('load', clearText);

    removeTaskBtn.addEventListener('click', () => {
        countChecked();
        // updatePlaceHolder();
        wipeNumOfChecked();
        if (numOfChecked === 0) {
            // I wouldn't bother changing the placeholder. A better practice would be to have a piece of warning text appear/disappear
        } else {
            createUpdatedArray();
            wipeToDoList();
            updateToDoList();
            wipeUpdatedToDoList();
            removeTaskDisplays();
            updatedDisplayTask();
        };
    });

    // adds complete class to labels that have a checked checkbox on complete btn click
    completeBtn.addEventListener('click', markTaskComplete);

    // creates a new alphabetically sorted array
    sortTaskBtn.addEventListener('click', () => {
        createSortedArray();
        wipeToDoList();
        sortUpdateToDoList();
        wipeSortedArray();
        removeTaskDisplays();
        updatedDisplayTask();
    });
}

onLoad();













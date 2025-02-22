const taskInput = document.getElementById('taskInput');
const submitBtn = document.getElementById('submitBtn');
const taskDisplay = document.getElementById('taskDisplay');
const sortTaskBtn = document.getElementById('sortTaskBtn');
const removeAllBtn = document.getElementById('removeAllBtn');
removeAllBtn.style.display = 'none';
const completeAllBtn = document.getElementById('completeAllBtn');
completeAllBtn.style.display = 'none';

// errors
const noTxtErrorMsg = document.getElementById('noTxtErrorMsg');
noTxtErrorMsg.style.display = 'none';

const toDoList = [];

function createTask() {
    const newTask = {
        name : taskInput.value,
        uniqueId : 0,
        isChecked : false,
    };
    toDoList.push(newTask);
};
// setting unique ids in sequencial order. element ids for tasks will all match unique ID
function updateUniqueIds() {
    for (let i = 0; i < toDoList.length; i++) {
        toDoList[i].uniqueId = i;
    };
};

function wipeTasks() {
    taskDisplay.innerHTML = '';
};

// function to show the remove all btn if there is 2 or more items checked. name sucks but whatev
let numOfChecked = 0;
function showBtns() {
    if (numOfChecked > 1) {
        removeAllBtn.style.display = 'block';
        completeAllBtn.style.display = 'block';
    } else {
        removeAllBtn.style.display = 'none';
        completeAllBtn.style.display = 'none';
    };
};

function createElement(num) {
        toDoList[num].uniqueId = num;
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('taskDiv');
        const taskText = document.createElement('label');
        taskText.textContent = toDoList[num].name;
        taskText.id = toDoList[num].uniqueId;
        taskText.classList.add('taskText');
        const taskCheckbox = document.createElement('input');
        taskCheckbox.type = 'checkbox';
        taskCheckbox.id = toDoList[num].uniqueId;
        taskCheckbox.classList.add('taskCheckbox')
        const removeTaskBtn = document.createElement('button');
        removeTaskBtn.innerHTML = 'remove';
        removeTaskBtn.classList.add('removeTaskBtns');
        removeTaskBtn.style.display = 'none';
        const completeTaskBtn = document.createElement('button');
        completeTaskBtn.innerHTML = 'complete';
        completeTaskBtn.style.display = 'none';

        taskDiv.appendChild(taskCheckbox);
        taskDiv.appendChild(taskText);
        taskDiv.appendChild(removeTaskBtn);
        taskDiv.appendChild(completeTaskBtn);
        taskDisplay.appendChild(taskDiv);
        // creating event listeners inside the function because I dont know how to access these outside of the function
        taskCheckbox.addEventListener('change', (e) => {
            if(taskCheckbox.checked) {
                numOfChecked++
                removeTaskBtn.style.display = 'inline-block';
                completeTaskBtn.style.display = 'inline-block';
                toDoList[e.target.id].isChecked = true;
                showBtns();
            } else {
                numOfChecked--
                removeTaskBtn.style.display = 'none';
                completeTaskBtn.style.display = 'none';
                toDoList[e.target.id].isChecked = false;
                showBtns();
            };
        });

        // somethings fucky, the function below may be the issue FIXED by changing btn ids
        const removeTaskBtns = document.getElementsByClassName('removeTaskBtns');
        const taskCheckboxs = document.getElementsByClassName('taskCheckbox');
        const taskTexts = document.getElementsByClassName('taskText')

        removeTaskBtn.addEventListener('click', (e) => {
            // scuffed, but I am updating the id of elements just to ensure they are in sequencial order
            for (let i = 0; i < toDoList.length; i++) {
                removeTaskBtns[i].id = i;
                taskCheckboxs[i].id = i;
                taskTexts[i].id = i;
            };
            toDoList.splice(Number(e.target.id), 1);
            console.log(e.target);
            updateUniqueIds();
            e.target.parentElement.remove();
            numOfChecked--
            showBtns();
        });

        completeTaskBtn.addEventListener('click', (e) => {
            e.target.parentElement.classList.add('completeTask');
        });
};

function sortTasks() {
    toDoList.sort((a, b) => a.name.localeCompare(b.name));
    updateUniqueIds();
    wipeTasks();
    for (let i = 0; i < toDoList.length; i++) {
        createElement(i);
    };
};

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (taskInput.value === '') {
        noTxtErrorMsg.style.display = 'block';
    } else {
        createTask();
        for (let i = 0; i < toDoList.length; i++) {
            if (i === toDoList.length - 1) {
                createElement(i);
            };
        };
        taskInput.value = '';
        noTxtErrorMsg.style.display = 'none';
    };
});

sortTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();
    sortTasks();
});

removeAllBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const taskDivs = document.getElementsByClassName('taskDiv');
    for (let i = 0; i < toDoList.length; i++) {
        if (toDoList[i].isChecked === true) {
            toDoList.splice(i, 1);
            taskDivs[i].remove();
        };
    };
    updateUniqueIds();
    // scuffed, but I am updating the id of elements just to ensure they are in sequencial order
    const removeTaskBtns = document.getElementsByClassName('removeTaskBtns');
    const taskCheckboxs = document.getElementsByClassName('taskCheckbox');
    const taskTexts = document.getElementsByClassName('taskText')
    for (let i = 0; i < toDoList.length; i++) {
        removeTaskBtns[i].id = i;
        taskCheckboxs[i].id = i;
        taskTexts[i].id = i;
    };
});

completeAllBtn.addEventListener('click', (e) => {
    e.preventDefault(e);

    const taskDivs = document.getElementsByClassName('taskDiv');
    for (let i = 0; i < toDoList.length; i++) {
        if (toDoList[i].isChecked === true) {
            taskDivs[i].classList.add('completeTask')
        };
    };
});
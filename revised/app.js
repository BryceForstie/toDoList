const addTaskBtn = document.querySelector('#addTaskBtn');
const taskInput = document.querySelector('#taskInput');
const noTextErrorMsg = document.querySelector('#noTextErrorMsg');
const taskDisplay = document.querySelector('#taskDisplay');
const sortBtn = document.querySelector('#sortBtn');

const taskArray = [];

let userText = '';

noTextErrorMsg.style.visibility = 'hidden';

function clearUserText() {
    userText = '';
    taskInput.value = '';
};

function arrayAddTask() {
    userText = taskInput.value;
    taskArray.push(userText);
    clearUserText();
};

function displayAddTask() {
    for (let i = 0; i<taskArray.length; i++) {
        if (i === taskArray.length - 1) {
        const taskDiv = document.createElement('div');
        taskDiv.id = `task${i}`;
        const taskCheckBox = document.createElement('input');
        taskCheckBox.type = 'checkbox';
        taskCheckBox.id = `checkbox${i}`;
        taskCheckBox.classList.add('checkboxs');
        
        taskCheckBox.addEventListener('click', function(e){
            if(e.target.checked === true) {
                const removeTaskBtn = document.createElement('button');
                removeTaskBtn.innerHTML = 'remove';
                removeTaskBtn.classList.add('removeBtn');
                taskDiv.append(removeTaskBtn);

                removeTaskBtn.addEventListener('click', function(){
                    removeItem();
                    wipeDisplay();
                    updateDisplay();
                });
            } else {
                e.target.parentElement.lastChild.remove();
            }
        });

        const taskTextDisplay = document.createElement('label');
        taskTextDisplay.setAttribute('for', `checkbox${i}`)
        taskTextDisplay.textContent = taskArray[i];

        taskDiv.append(taskCheckBox);
        taskDiv.append(taskTextDisplay);
        taskDisplay.append(taskDiv);
        };
    };
};

const removeBtns = document.getElementsByClassName('removeBtn');
const checkboxs = document.getElementsByClassName('checkboxs');

function emptyTextError() {
    noTextErrorMsg.style.visibility = 'visible';
};

function wipeDisplay() {
    taskDisplay.innerHTML = '';
};

function updateDisplay() {
    for (let i = 0; i<taskArray.length; i++) {
        const taskDiv = document.createElement('div');
        taskDiv.id = `task${i}`;
        const taskCheckBox = document.createElement('input');
        taskCheckBox.type = 'checkbox';
        taskCheckBox.id = `checkbox${i}`;
        taskCheckBox.classList.add('checkboxs');
        
        taskCheckBox.addEventListener('click', function(e){
            if(e.target.checked === true) {
                const removeTaskBtn = document.createElement('button');
                removeTaskBtn.innerHTML = 'remove';
                removeTaskBtn.classList.add('removeBtn');
                taskDiv.append(removeTaskBtn);

                removeTaskBtn.addEventListener('click', function(){
                    removeItem();
                    wipeDisplay();
                    updateDisplay();
                });
            } else {
                e.target.parentElement.lastChild.remove();
            };
        });

        const taskTextDisplay = document.createElement('label');
        taskTextDisplay.setAttribute('for', `checkbox${i}`)
        taskTextDisplay.textContent = taskArray[i];

        taskDiv.append(taskCheckBox);
        taskDiv.append(taskTextDisplay);
        taskDisplay.append(taskDiv);
        };
};

function removeItem() {
    for (let i = 0; i<taskArray.length; i++) {
        if (document.querySelector(`#checkbox${i}`).checked === true) {
            taskArray.splice(i, 1);
        };
    };
};

function sortAlph() {
    taskArray.sort();
};

function onLoad() {
    window.addEventListener('load', () => {
        clearUserText();
    });

    addTaskBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (taskInput.value === '') {
            emptyTextError();
        } else {
            arrayAddTask();
            displayAddTask();
            noTextErrorMsg.style.visibility = 'hidden';
        };
    });

    sortBtn.addEventListener('click', function(e){
        e.preventDefault();
        sortAlph();
        wipeDisplay();
        updateDisplay();
    });
};

onLoad();
//h1 selector
const listHead = document.querySelector('h1')

//text input selector
const taskInput = document.querySelector('#taskInput');

//button selectors
const addTaskBtn = document.querySelector('#addTaskBtn');
const removeTaskBtn = document.querySelector('#removeTaskBtn');
const sortTaskBtn = document.querySelector('#sortTaskBtn');

// function to console.log the text entered into the task input.

const returnInputValue = () => {
    let inputText = taskInput.value;
    console.log(inputText);
}

// return the returnInputValue function when clicking the add button. The function currently should just console.log whatever is typed in when you click add

addTaskBtn.addEventListener('click', returnInputValue);

//create an h2 below the To do list h1








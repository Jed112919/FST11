// Step 1: Select DOM elements
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const filterToDo = document.querySelector('.filter-todo');
const todoList = document.querySelector('.todo-list');

// Step 2: Create Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteOrCompleteTodo)
filterToDo.addEventListener('change', filterTodos)


// Step 3: Create Functions to add a new Task
function addTodo(e) {
    // Prevents the form submission
    e.preventDefault();

    // Create the todoDiv container
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // Create a new todoList
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);

    // Create ToDo Complete Button and Delete Button
    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete-btn');
    completeBtn.innerHTML = `<i class="ri-check-line"></i>`;
    todoDiv.appendChild(completeBtn);

    // Delete Button
    const trashBtn = document.createElement('button');
    trashBtn.classList.add('trash-btn');
    trashBtn.innerHTML = `<i class="ri-delete-bin-7-line"></i>`;
    todoDiv.appendChild(trashBtn);

    //  Append the ToDo Div to the ToDo List
    todoList.appendChild(todoDiv);

    todoInput.value = "";
}

// Step 4: Function to delete or complete a task
function deleteOrCompleteTodo(e) {
    const targetBtn = e.target;
    
    if(targetBtn.classList.contains('trash-btn')) {
       const todoDiv = targetBtn.parentElement;
       todoDiv.classList.add('fall');
       
       todoDiv.addEventListener('transitionend', function () {
        todoDiv.remove();
       });
    }

    if(targetBtn.classList.contains('complete-btn')) {
        const todoDiv = targetBtn.parentElement;
        todoDiv.classList.toggle('completed');
        // todoDiv.classList.add('completed');
    }
}

// Step 5: Function to filter task based on completion status
function filterTodos(e) {
    const todos = todoList.childNodes;

    todos.forEach((todo) => {
        const  filterValue = e.target.value;

        if(filterValue === 'all') {
            //Show all of the task
            todo.style.display = 'flex';
        }
        else if(filterValue === 'completed') {
            //Show the completed task
            if(todo.classList.contains('completed')) {
                todo.style.display = 'flex';
            }

            // Hide uncompleted task
            else {
                todo.style.display = 'none';
            }
        }

        else if(filterValue === 'uncompleted') {
            //Show uncompleted task
            if(!todo.classList.contains('completed')) {
                todo.style.display = 'flex';
            }

            // Hide uncompleted task
            else {
                todo.style.display = 'none';
            }
        }
    });


}

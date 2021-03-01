//selectors
const todoInput = document.querySelector(".todo-input");
const submitBtn = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");



//events
submitBtn.addEventListener("click",addTaskToList);


//functions
function addTaskToList(event){
    event.preventDefault();
    //capture user input
    const todo = todoInput.value;
    //create the todo div
    const listDiv = document.createElement("div");
    //assign todo class to the div
    listDiv.classList.add("todo");
    //create the list element
    const todoItem = document.createElement("li");
    //add class to the list
    todoItem.classList.add("todo-item");
    //add user input into the list
    todoItem.innerText = todo;
    //attach to the main div
    listDiv.appendChild(todoItem);
    //attach div to the todo list
    todoList.appendChild(listDiv);
    //add the check button into the list
    const checkBtn = document.createElement("button");
    checkBtn.classList.add("check");
    checkBtn.innerHTML = `<i class="fas fa-check"></i>`;
    listDiv.appendChild(checkBtn);
    //add the trash button into the list
    const trashBtn = document.createElement("button");
    trashBtn.classList.add("trash");
    trashBtn.innerHTML = `<i class="fas fa-trash"></i>`;
    listDiv.appendChild(trashBtn);
    //reset input
    todoInput.value = "";
    
}

const todoInput = document.querySelector('.todo-input');
const addButton = document.querySelector('.add-button');
const todosList = document.querySelector('.todos');
// const emptyImage = document.querySelector(".empty-image");
// let todosJson = JSON.parse(localStorage.getItem("todos"))||[];

// function getTodoHtml(todo, index){
//     let checked =todo.status=="completed"?"checked":"";
//     return `
//         <li class="todo">
//         <label for="${index}">
//         <input id="${index}" onclick="updateStatus(this)" type="checkbox" ${checked}>
//         <span class="${checked}">${todo.name}</span>
//         </label>

// }

// list.addEventListener('click', function(lll)){
//     if(lll.target.tagname === 'LI'){
//         lll.target
//     }
// }

function newElement() {
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = todoText;
        todosList.appendChild(listItem);
        todoInput.value = '';
    }
}

addButton.addEventListener('click', newElement);
todoInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        newElement();
    }
});
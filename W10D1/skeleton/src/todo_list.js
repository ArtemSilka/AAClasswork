const todos = [];
const todoElement = document.querySelector('.todos');
const todoFormElement = document.querySelector('.add-todo-form');


const addTodo = (e) => {
    e.preventDefault();

    const val = document.getElementsByName('add-todo').item(0).value;
    let todoObj = {
        val,
        done: false
    };
    
    todos.push(todoObj);
    todoObj = {};
    populateList(todos, todoElement);
};

function populateList (todos, todoElement) {
    const listEle = document.createElement('li');
    const labelTag = document.createElement('label');
    const inputTag = document.createElement('input');
    // let displayTodos = [];
    let displayTodos = todos.map((ele) => {
        inputTag.setAttribute('type', 'checkbox');
        labelTag.innerHTML = ele.val;
        inputTag.checkbox = ele.done;
        listEle.appendChild(inputTag);
        listEle.appendChild(labelTag);
        // displayTodos.push(listEle);
        debugger;
        // return listEle;
    });
    debugger;
    todoElement.append(listEle);
    debugger;

};

todoFormElement.addEventListener('submit', addTodo);


var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
    listElement.innerHTML = '';

    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElemente = document.createElement('a');

        linkElemente.setAttribute('href','#');

        var pos = todos.indexOf(todo);
        linkElemente.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        var linkText = document.createTextNode('Excluir');

        linkElemente.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElemente);

        listElement.appendChild(todoElement);

    }
}

renderTodos();

function addTodo() {
    var todoTex = inputElement.value;

    if (todoTex !== '') {
        todos.push(todoTex);
        inputElement.value = '';
        renderTodos();
        saveToStrorage()
    }    
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStrorage()
}

function saveToStrorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}
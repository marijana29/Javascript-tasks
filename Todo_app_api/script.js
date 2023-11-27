const addTodoBtn = document.querySelector("#add-todo");
const newTodoInput = document.querySelector("#new-todo");
const todoList = document.querySelector("#list");
const removeDoneTodosButton = document.querySelector("#remove-done-todos");

let todos = [];

function loadTodos() {
  fetch("http://localhost:4730/todos")
    .then((res) => res.json())
    .then((todosFromApi) => {
      todos = todosFromApi;
      renderTodos();
    });
}

loadTodos();

function renderTodos() {
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    const newLi = document.createElement("li");

    const text = document.createTextNode(todo.description);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;

    checkbox.addEventListener("change", function () {
      const newStatus = this.checked;
      todo.done = newStatus;
      renderTodos();
      fetch(`http://localhost:4730/todos/${todo.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          description: todo.description,
          done: newStatus,
        }),
      });
    });

    if (todo.done) {
      newLi.style.textDecoration = "line-through";
    }

    newLi.appendChild(text);
    newLi.appendChild(checkbox);
    todoList.appendChild(newLi);
  });
}

removeDoneTodosButton.addEventListener("click", () => {
  const doneTodos = todos.filter((todo) => todo.done);

  doneTodos.forEach((doneTodo) => {
    fetch(`http://localhost:4730/todos/${doneTodo.id}`, {
      method: "DELETE",
    })
      .then((res) => {
        return res.json();
      })
      .then(() => {
        todos = todos.filter((t) => t.id !== doneTodo.id);
        renderTodos();
      });
  });
});

addTodoBtn.addEventListener("click", () => {
  const newTodoText = newTodoInput.value.trim();
  const lowerCaseNewTodoText = newTodoText.toLowerCase();

  if (
    todos.some(
      (todo) => todo.description.toLowerCase() === lowerCaseNewTodoText
    )
  ) {
    alert("Duplicate entry! This todo already exists.");
    return;
  }

  const newTodo = {
    description: newTodoText,
    done: false,
  };

  fetch("http://localhost:4730/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  })
    .then((res) => res.json())
    .then((newTodoFromApi) => {
      todos.push(newTodoFromApi);
      renderTodos();

      newTodoInput.value = "";
    });
});

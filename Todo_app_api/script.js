const addTodoBtn = document.querySelector("#add-todo");
const newTodoInput = document.querySelector("#new-todo");
const todoList = document.querySelector("#list");
const removeDoneTodosButton = document.querySelector("#remove-done-todos");
const errorMessageElement = document.querySelector("#error-message");

let todos = [];

let filterName = "all";
const filterAll = document.querySelector("#all");
const filterOpen = document.querySelector("#open");
const filterDone = document.querySelector("#done");

filterAll.addEventListener("input", handleFilterChange);
filterOpen.addEventListener("input", handleFilterChange);
filterDone.addEventListener("input", handleFilterChange);

function handleFilterChange(event) {
  if (event.target === filterAll) {
    filterName = "all";
  } else if (event.target === filterOpen) {
    filterName = "open";
  } else if (event.target === filterDone) {
    filterName = "done";
  }

  loadTodos();
}

function loadTodos() {
  fetchTodos()
    .then((todosFromApi) => {
      todos = todosFromApi;
      renderTodos();
      errorMessageElement.textContent = "";
    })
    .catch((error) => {
      errorMessageElement.textContent = `Error: ${error.message}`;
    });
}

function renderTodos() {
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    if (
      filterName === "all" ||
      (filterName === "open" && !todo.done) ||
      (filterName === "done" && todo.done)
    ) {
      const newLi = document.createElement("li");

      const text = document.createTextNode(todo.description);

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = todo.done;

      checkbox.addEventListener("change", function () {
        const newStatus = this.checked;
        todo.done = newStatus;
        renderTodos();
        updateTodoStatus(todo)
          .then(() => {
            errorMessageElement.textContent = "";
          })
          .catch((error) => {
            errorMessageElement.textContent = `Error: ${error.message}`;
          });
      });

      if (todo.done) {
        newLi.style.textDecoration = "line-through";
      }

      newLi.appendChild(text);
      newLi.appendChild(checkbox);
      todoList.appendChild(newLi);
    }
  });
}

removeDoneTodosButton.addEventListener("click", () => {
  const doneTodos = todos.filter((todo) => todo.done);

  doneTodos.forEach((doneTodo) => {
    deleteTodo(doneTodo.id)
      .then(() => {
        todos = todos.filter((t) => t.id !== doneTodo.id);
        renderTodos();
      })
      .catch((error) => {
        errorMessageElement.textContent = `Error: ${error.message}`;
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
    errorMessageElement.textContent = `Duplicate entry! This todo already exists.`;
    return;
  }

  const newTodo = {
    description: newTodoText,
    done: false,
  };

  addTodo(newTodo)
    .then((newTodoFromApi) => {
      todos.push(newTodoFromApi);
      renderTodos();
      errorMessageElement.textContent = "";
      newTodoInput.value = "";
    })
    .catch((error) => {
      errorMessageElement.textContent = `Error: ${error.message}`;
    });
});

loadTodos();

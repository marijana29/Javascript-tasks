const state = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
  filter: "all",
};

function renderTodos() {
  const list = document.querySelector("#list");
  list.innerHTML = "";

  const filteredTodos =
    state.filter === "all"
      ? state.todos
      : state.todos.filter((todo) =>
          state.filter === "open" ? !todo.done : todo.done
        );

  filteredTodos.forEach((todo) => {
    const todoLi = document.createElement("li");
    todoLi.todoObj = todo;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;
    todoLi.appendChild(checkbox);

    const todoText = document.createElement("span");
    todoText.textContent = todo.description;
    todoText.style.textDecoration = todo.done ? "line-through" : "none";
    todoLi.appendChild(todoText);

    list.appendChild(todoLi);
  });

  localStorage.setItem("todos", JSON.stringify(state.todos));
}

const addButton = document.querySelector("#add-todo");
addButton.addEventListener("click", function () {
  const inputField = document.querySelector("#new-todo");
  const newTodoDescription = inputField.value.trim().toLowerCase();

  if (
    newTodoDescription !== "" &&
    !state.todos.some(
      (todo) => todo.description.toLowerCase() === newTodoDescription
    )
  ) {
    state.todos.push({
      description: inputField.value,
      done: false,
      id: Date.now(),
    });
    inputField.value = "";
    renderTodos();
  } else {
    alert("Duplicate description. Please enter a unique description.");
  }
});

const list = document.querySelector("#list");
list.addEventListener("change", (e) => {
  const checkbox = e.target;
  const liElement = checkbox.parentElement;
  const todo = liElement.todoObj;

  todo.done = checkbox.checked;

  const todoText = liElement.querySelector("span");
  todoText.style.textDecoration = checkbox.checked ? "line-through" : "none";

  renderTodos();
});

document.querySelectorAll('input[name="filter"]').forEach((radio) => {
  radio.addEventListener("change", (e) => {
    state.filter = e.target.value;
    renderTodos();
  });
});

const removeDoneButton = document.querySelector("#remove-done-todos");
removeDoneButton.addEventListener("click", function () {
  state.todos = state.todos.filter((todo) => !todo.done);
  renderTodos();
});

renderTodos();

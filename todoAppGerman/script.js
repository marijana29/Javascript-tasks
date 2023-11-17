const todoDescription = document.querySelector("#todo-description");
const btnAdd = document.querySelector("#btn-add");
const btnRemove = document.querySelector("#btn-remove");
const todosList = document.querySelector("#todos-list");

const state = {
  todos: [],
  filter: "all",
};

function loadTodos() {
  const storedTodos = localStorage.getItem("todos");
  state.todos = storedTodos ? JSON.parse(storedTodos) : [];
}

// Calling loadTodos when the page loads
loadTodos();

// Function to handle radio button changes
function handleRadioChange(e) {
  state.filter = e.target.id;
  renderTodos();
}

// Adding event listeners to radio buttons
document.querySelectorAll('input[name="filter"]').forEach((radio) => {
  radio.addEventListener("change", handleRadioChange);
});

renderTodos();

function renderTodos() {
  todosList.innerHTML = "";

  let filteredTodos;

  if (state.filter === "all") {
    filteredTodos = state.todos;
  } else if (state.filter === "open") {
    filteredTodos = state.todos.filter((todo) => !todo.done);
  } else if (state.filter === "done") {
    filteredTodos = state.todos.filter((todo) => todo.done);
  }

  for (const currentTodo of filteredTodos) {
    const listEl = document.createElement("li");

    // Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = currentTodo.id;
    checkbox.checked = currentTodo.done;

    // Label
    const description = document.createElement("label");
    description.textContent = currentTodo.description;
    description.setAttribute("for", checkbox.id);

    if (currentTodo.done) {
      description.style.textDecoration = "line-through";
    }

    listEl.appendChild(checkbox);
    listEl.appendChild(description);
    todosList.appendChild(listEl);
  }
}

function addNewTodo(event) {
  event.preventDefault();

  const description = todoDescription.value.trim().toLowerCase();

  if (
    description !== "" &&
    !state.todos.some((todo) => todo.description.toLowerCase() === description)
  ) {
    const capitalizedDescription =
      description.charAt(0).toUpperCase() + description.slice(1);
    const newTodo = {
      description: capitalizedDescription,
      done: false,
      id: Date.now(),
    };

    state.todos.push(newTodo);
    todoDescription.value = "";
    renderTodos();
  } else {
    alert("Duplicate description. Please enter a unique description.");
  }

  localStorage.setItem("todos", JSON.stringify(state.todos));
}

btnAdd.addEventListener("click", addNewTodo);
btnRemove.addEventListener("click", removeDoneTodos);
todosList.addEventListener("change", handleCheckboxChange);

function handleCheckboxChange(event) {
  const checkbox = event.target;
  const todoId = parseInt(checkbox.id, 10);
  const todo = state.todos.find((todo) => todo.id === todoId);

  if (todo) {
    todo.done = checkbox.checked;
    renderTodos();
  }
}

function removeDoneTodos() {
  const doneTodos = state.todos.filter((todo) => todo.done);

  if (doneTodos.length > 0) {
    state.todos = state.todos.filter((todo) => !todo.done);
    renderTodos();
  } else {
    alert("There are no todos marked as done to remove.");
  }
  localStorage.setItem("todos", JSON.stringify(state.todos));
}

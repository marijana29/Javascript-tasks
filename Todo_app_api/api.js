function fetchTodos() {
  return fetch("http://localhost:4730/todos").then((res) => {
    if (!res.ok) {
      throw new Error(`Failed to fetch todos: ${res.statusText}`);
    }
    return res.json();
  });
}

function updateTodoStatus(todo) {
  return fetch(`http://localhost:4730/todos/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      description: todo.description,
      done: todo.done,
    }),
  }).then((res) => {
    if (!res.ok) {
      throw new Error(`Failed to update todo status: ${res.statusText}`);
    }
    return res.json();
  });
}

function deleteTodo(todoId) {
  return fetch(`http://localhost:4730/todos/${todoId}`, {
    method: "DELETE",
  }).then((res) => {
    if (!res.ok) {
      throw new Error(`Failed to delete todo with id ${todoId}`);
    }
    return res.json();
  });
}

function addTodo(newTodo) {
  return fetch("http://localhost:4730/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  }).then((res) => {
    if (!res.ok) {
      throw new Error(`Failed to add new todo: ${res.statusText}`);
    }
    return res.json();
  });
}

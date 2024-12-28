export const createTodo = function (todoId, label, section = "default") {
  const todo = {
    todoId,
    section,
    label,
    completed: false,
  };
  return todo;
};

// getLabel: () => todo.list[0].label,
// isCompleted: () => todo.list[0].completed,
// toggleCompleted: () => {
//   todo.list.completed = !todo.list[0].completed;
// }

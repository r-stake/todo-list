export const createTodo = function (label, section = "default") {
  const todo = {
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

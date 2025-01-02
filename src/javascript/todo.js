import { findProject } from "./project";

export const createTodo = function (todoId, label, sectionName = "default") {
  const todo = {
    todoId,
    sectionName,
    label,
    completed: false,
  };
  return todo;
};

export const getTodoLabel = (projectsList, projectId, todoId, sectionName) => {
  const todo = findTodo(projectsList, projectId, todoId, sectionName);

  if (!todo.label) {
    console.error(`Label not found for ${todo}`);
    return null;
  }

  return todo.label;
};

// ------------------ Helper functions --------------------

const findTodo = (projectsList, projectId, todoId, sectionName) => {
  if (!todoId) {
    console.error("Missing todoId parameter, please enter a valid todoId");
    return null;
  }
  const project = findProject(projectsList, projectId);
  const section = project.todoList.find(
    (section) => section.sectionName === sectionName
  );

  if (!section) {
    console.error(
      `Section '${sectionName}' not found in project '${projectId}'`
    );
    return null;
  }

  console.log(section);

  const todo = section.list.find((todo) => todo.todoId === todoId);

  if (!todo) {
    console.error(
      `Todo with todoId ${todoId} not found in ${projectId} ${sectionName}`
    );
    return null;
  }

  return todo;
};

// getLabel: () => todo.list[0].label,
// isCompleted: () => todo.list[0].completed,
// toggleCompleted: () => {
//   todo.list.completed = !todo.list[0].completed;
// }

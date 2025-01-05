import { findProject, findSection } from "./project";

const createTodo = function (todoId, label, sectionName = "default") {
  const todo = {
    todoId,
    sectionName,
    label,
    completed: false,
  };
  return todo;
};

export const addTodo = (
  projectsList,
  projectId,
  todoId,
  label,
  sectionName
) => {
  // Search for project
  const project = findProject(projectsList, projectId);
  // Search for todo section
  let section = findSection(project, sectionName);
  // Create a new section if one does not exist
  if (!section) {
    section = { sectionName, list: [] };
    project.todoList.push(section);
  }

  // Create a new todo and add it to the section
  const todo = createTodo(todoId, label, sectionName);
  section.list.push(todo);

  return todo;
};

export const getTodosBySection = (projectsList, projectId, sectionName) => {
  const project = findProject(projectsList, projectId);
  const section = findSection(project, sectionName);

  return section.list;
};

export const getTodoLabel = (projectsList, projectId, todoId, sectionName) => {
  const todo = findTodo(projectsList, projectId, todoId, sectionName);

  if (!todo.label) {
    console.error("Label not found for: ", todo);
    return null;
  }

  return todo.label;
};

export const setTodoLabel = (
  projectsList,
  projectId,
  todoId,
  newLabel,
  sectionName
) => {
  const todo = findTodo(projectsList, projectId, todoId, sectionName);

  if (!Object.hasOwn(todo, "label")) {
    console.error(
      "Label property missing from todo object. Make sure data is not corrupted."
    );
    return null;
  }

  return (todo.label = newLabel);
};

export const isCompleted = (projectsList, projectId, todoId, sectionName) => {
  const todo = findTodo(projectsList, projectId, todoId, sectionName);

  if (todo.completed == null) {
    console.error("'Completed' parameter is missing from todo object: ", todo);
    return null;
  }

  return todo.completed;
};

export const toggleCompleted = (
  projectsList,
  projectId,
  todoId,
  sectionName
) => {
  const todo = findTodo(projectsList, projectId, todoId, sectionName);

  if (todo.completed == null) {
    console.error("'Completed' parameter is missing from todo object: ", todo);
    return false;
  }

  todo.completed = !todo.completed;
  return true;
};

// ------------------ Helper functions --------------------

const findTodo = (projectsList, projectId, todoId, sectionName) => {
  if (!todoId) {
    console.error("Missing todoId parameter, please enter a valid todoId");
    return null;
  }
  const project = findProject(projectsList, projectId);
  const section = findSection(project, sectionName);

  if (!section) {
    console.error(
      `Section '${sectionName}' not found in project '${projectId}'`
    );
    return null;
  }

  const todo = section.list.find((todo) => todo.todoId === todoId);

  if (!todo) {
    console.error(
      `Todo with todoId ${todoId} not found in ${projectId} ${sectionName}`
    );
    return null;
  }

  return todo;
};

// toggleCompleted: () => {
//   todo.list.completed = !todo.list[0].completed;
// }

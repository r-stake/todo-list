import {
  createProject,
  deleteProject as deleteProjectBase,
  getProject as getProjectBase,
  getAllProjects as getAllProjectsBase,
  getProjectTodos as getProjectTodosBase,
  getProjectTitle as getProjectTitleBase,
  setProjectTitle as setProjectTitleBase,
  getProjectDescription as getProjectDescriptionBase,
  setProjectDescription as setProjectDescriptionBase,
  getProjectDueDate as getProjectDueDateBase,
  setProjectDueDate as setProjectDueDateBase,
  getProjectPriority as getProjectPriorityBase,
  setProjectPriority as setProjectPriorityBase,
} from "./project";

import {
  addTodo as addTodoBase,
  getTodosBySection as getTodosBySectionBase,
  getTodoLabel as getTodoLabelBase,
  isCompleted as isCompletedBase,
  setTodoLabel as setTodoLabelBase,
} from "./todo";

export const container = () => {
  const projects = [];

  //------------------- Project methods -------------------

  const addProject = (projectId, title, description, date, priority) => {
    const project = createProject(
      projectId,
      title,
      description,
      date,
      priority
    );
    projects.push(project);

    return project;
  };

  const deleteProject = (projectId) => deleteProjectBase(projects, projectId);

  const getProject = (projectId) => {
    return getProjectBase(projects, projectId);
  };

  const getAllProjects = getAllProjectsBase(projects);

  const getProjectTodos = (projectId) => {
    return getProjectTodosBase(projects, projectId);
  };

  const getProjectTitle = (projectId) => {
    return getProjectTitleBase(projects, projectId);
  };

  const setProjectTitle = (projectId, newTitle) => {
    return setProjectTitleBase(projects, projectId, newTitle);
  };

  const getProjectDescription = (projectId) => {
    return getProjectDescriptionBase(projects, projectId);
  };

  const setProjectDescription = (projectId, newDescription) => {
    return setProjectDescriptionBase(projects, projectId, newDescription);
  };

  const getProjectPriority = (projectId) => {
    return getProjectPriorityBase(projects, projectId);
  };

  const setProjectPriority = (projectId, newPriority) => {
    return setProjectPriorityBase(projects, projectId, newPriority);
  };

  const getProjectDueDate = (projectId) => {
    return getProjectDueDateBase(projects, projectId);
  };

  const setProjectDueDate = (projectId, newDate) => {
    return setProjectDueDateBase(projects, projectId, newDate);
  };

  //------------------- Todo methods -------------------

  const addTodo = (projectId, todoId, label, section = "default") => {
    return addTodoBase(projects, projectId, todoId, label, section);
  };

  const getTodosBySection = (projectId, sectionName = "default") => {
    return getTodosBySectionBase(projects, projectId, sectionName);
  };

  const getTodoLabel = (projectId, todoId, sectionName = "default") => {
    return getTodoLabelBase(projects, projectId, todoId, sectionName);
  };

  const setTodoLabel = (
    projectId,
    todoId,
    newLabel,
    sectionName = "default"
  ) => {
    return setTodoLabelBase(projects, projectId, todoId, newLabel, sectionName);
  };

  const isCompleted = (projectId, todoId, sectionName = "default") => {
    return isCompletedBase(projects, projectId, todoId, sectionName);
  };

  return {
    project: {
      addProject,
      deleteProject,
      getProject,
      getAllProjects,
      getProjectTodos,
      getProjectTitle,
      setProjectTitle,
      getProjectDescription,
      setProjectDescription,
      getProjectDueDate,
      setProjectDueDate,
      getProjectPriority,
      setProjectPriority,
    },
    todo: {
      addTodo,
      getTodosBySection,
      getTodoLabel,
      setTodoLabel,
      isCompleted,
    },
  };
};

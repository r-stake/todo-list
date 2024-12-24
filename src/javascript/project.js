export const createProject = function (
  projectId,
  title,
  description,
  date,
  priority
) {
  const todoList = [];

  let dueDate = new Date(date);

  // const getTodoList = () => todoList;

  // const addTodo = function (label, section = "default") {
  //   let sectionObj = todoList.find((item) => item.section === section);
  //   if (!sectionObj) {
  //     sectionObj = { section, list: [] };
  //     todoList.push(sectionObj);
  //   }

  //   const todo = createTodo(label, section);
  //   sectionObj.list.push(todo);

  //   return todo;
  // };

  // const getTodosBySection = (section) => {
  //   const sectionObj = todoList.find((item) => item.section === section);
  //   if (sectionObj) {
  //     return sectionObj.list;
  //   }
  //   return [];
  // };

  // const toggleTodoStatus = (section, label) => {
  //   const sectionObj = todoList.find((item) => item.section === section);
  //   if (!sectionObj) {
  //     return false;
  //   }

  //   const todo = sectionObj.list.find((todo) => todo.label === label);
  //   if (todo) {
  //     todo.completed = !todo.completed;
  //     return true;
  //   }
  //   return false;
  // };

  // const isCompletedTodo = (section, label) => {
  //   const sectionObj = todoList.find((item) => item.section === section);
  //   if (!sectionObj) {
  //     return false;
  //   }

  //   const todo = sectionObj.list.find((todo) => todo.label === label);
  //   if (!todo) {
  //     return false;
  //   }

  //   return todo.completed;
  // };

  // const getTitle = () => title;
  // const setTitle = (newTitle) => {
  //   title = newTitle;
  // };

  // const getDescription = () => description;
  // const setDescription = (newDescription) => {
  //   description = newDescription;
  // };

  // const getDueDate = () => dueDate;
  // const setDueDate = (newDueDate) => {
  //   dueDate = new Date(newDueDate);
  // };

  // const getPriority = () => priority;
  // const setPriority = (newPriority) => {
  //   priority = newPriority;
  // };

  return {
    todoList,
    projectId,
    title,
    description,
    dueDate,
    priority,
    // getTodoList,
    // addTodo,
    // getTodosBySection,
    // toggleTodoStatus,
    // isCompletedTodo,
    // getTitle,
    // setTitle,
    // getDescription,
    // setDescription,
    // getDueDate,
    // setDueDate,
    // getPriority,
    // setPriority,
  };
};

export const getProject = (projectsList, projectId) => {
  return findProject(projectsList, projectId);
};

export const getAllProjects = (projectsList) => () => projectsList;

export const getProjectTodos = (projectsLists, projectId) => {
  return findProject(projectsLists, projectId).todoList;
};

export const deleteProject = (projectsList, projectId) => {
  const index = projectsList.findIndex(
    (project) => project.projectId === projectId
  );

  if (index !== -1) {
    return projectsList.splice(index, 1);
  } else {
    console.error("Project not found");
    return null;
  }
};

export const getProjectTitle = (projectsList, projectId) => {
  return findProject(projectsList, projectId).title;
};

export const setProjectTitle = (projectsList, projectId, newTitle) => {
  return (findProject(projectsList, projectId).title = newTitle);
};

export const getProjectDescription = (projectsList, projectId) => {
  return findProject(projectsList, projectId).description;
};

export const setProjectDescription = (
  projectsList,
  projectId,
  newDescription
) => {
  return (findProject(projectsList, projectId).description = newDescription);
};

export const getProjectDueDate = (projectsList, projectId) => {
  return findProject(projectsList, projectId).dueDate;
};

export const setProjectDueDate = (projectsList, projectId, newDate) => {
  const date = new Date(newDate);
  return (findProject(projectsList, projectId).dueDate = date);
};

export const getProjectPriority = (projectsList, projectId) => {
  return findProject(projectsList, projectId).priority;
};

export const setProjectPriority = (projectsList, projectId, newPriority) => {
  return (findProject(projectsList, projectId).priority = newPriority);
};

// ---------------- Helper functions -----------------

export const findProject = (projectsList, projectId) => {
  if (!projectId) {
    console.error(
      "Missing projectId parameter, please enter a valid project id."
    );
    return null;
  }
  const project = projectsList.find(
    (project) => project.projectId === projectId
  );

  if (!project) {
    console.error("Project with specified id not found");
    return null;
  }

  return project;
};

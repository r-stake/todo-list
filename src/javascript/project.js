export const createProject = function (
  projectId,
  title,
  description,
  date,
  priority
) {
  const todoList = [];

  let dueDate = new Date(date);

  return {
    todoList,
    projectId,
    title,
    description,
    dueDate,
    priority,
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
  if (!projectsList || !Array.isArray(projectsList)) {
    console.error(
      "Invalid projectsList parameter. Expected and array.",
      projectsList
    );
    return null;
  }

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

export const findSection = (project, sectionName) => {
  if (!sectionName) {
    console.error("Invalid or missing sectionName parameter.", sectionName);
    return null;
  }
  const section = project.todoList.find(
    (section) => section.sectionName === sectionName
  );

  if (!section) {
    console.error(`Section '${sectionName}' not found in project: `, project);
    return null;
  }

  return section;
};

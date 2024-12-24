import "../css/style.css";
import "../css/normalize.css";
import { container } from "./container";
console.log("Working as intended");

const myProjects = container();
console.log(myProjects);
console.log(
  myProjects.addProject(
    "prj1",
    "The Lord of the Rings: The Fellowship of the Ring",
    "Read the book",
    "2025-06-01",
    3
  )
);
myProjects.addProject(
  "prj2",
  "The Count of Monte Cristo",
  "Read the book",
  "2024-12-31",
  1
);
console.log("My projects: ", myProjects.getAllProjects());
console.log("Project 1 todo list: ", myProjects.getProjectTodos("prj1"));
console.log("Project 1 : ", myProjects.getProject("prj1"));
console.log("Removed project: ", myProjects.deleteProject("prj2"));
console.log("My projects after removal: ", myProjects.getAllProjects());
console.log("Project title: ", myProjects.getProjectTitle("prj1"));
console.log(
  "New project title: ",
  myProjects.setProjectTitle("prj1", "The Lord of the Rings")
);
console.log("Project description: ", myProjects.getProjectDescription("prj1"));
console.log(
  "New project description: ",
  myProjects.setProjectDescription("prj1", "Finish the rest of the trilogy")
);
console.log("Project due date: ", myProjects.getProjectDueDate("prj1"));
console.log(
  "New project due date: ",
  myProjects.setProjectDueDate("prj1", "2025-12-31")
);
console.log("Project priority: ", myProjects.getProjectPriority("prj1"));
console.log("New project priority: ", myProjects.setProjectPriority("prj1", 2));

// projects[0].addTodo("Ignore work");
// projects[0].addTodo("Play video games");
// projects[0].addTodo("Fellowship of the ring", "Lord of the Rings watch list");
// projects[0].addTodo("Two Towers", "Lord of the Rings watch list");
// projects[0].addTodo("Return of the King", "Lord of the Rings watch list");
// projects[0].addTodo("Buy beer", "Relaxing evening");
// projects[0].addTodo("Make popcorn", "Relaxing evening");
// projects[0].addTodo("Watch 'Family Guy'", "Relaxing evening");

// console.log(projects[0].getList());

// console.log(projects[0].getTodosBySection("Lord of the Rings watch list"));

// projects[0].toggleTodoStatus("Relaxing evening", "Buy beer");
// console.log(projects[0].getTodosBySection("Relaxing evening"));

// projects.push(createProject("Project Dos", "Second project", "2027-06-01", 3));

// console.log(projects);

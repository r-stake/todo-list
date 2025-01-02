import "../css/style.css";
import "../css/normalize.css";
import { container } from "./container";
console.log("Working as intended");

const myProjects = container();
console.log(myProjects);
console.log(
  myProjects.project.addProject(
    "prj1",
    "The Lord of the Rings: The Fellowship of the Ring",
    "Read the book",
    "2025-06-01",
    3
  )
);
myProjects.project.addProject(
  "prj2",
  "The Count of Monte Cristo",
  "Read the book",
  "2024-12-31",
  1
);
console.log("My projects: ", myProjects.project.getAllProjects());
console.log(
  "Project 1 todo list: ",
  myProjects.project.getProjectTodos("prj1")
);
console.log("Project 1 : ", myProjects.project.getProject("prj1"));
console.log("Removed project: ", myProjects.project.deleteProject("prj2"));
console.log("My projects after removal: ", myProjects.project.getAllProjects());
console.log("Project title: ", myProjects.project.getProjectTitle("prj1"));
console.log(
  "New project title: ",
  myProjects.project.setProjectTitle("prj1", "The Lord of the Rings")
);
console.log(
  "Project description: ",
  myProjects.project.getProjectDescription("prj1")
);
console.log(
  "New project description: ",
  myProjects.project.setProjectDescription(
    "prj1",
    "Finish the rest of the trilogy"
  )
);
console.log("Project due date: ", myProjects.project.getProjectDueDate("prj1"));
console.log(
  "New project due date: ",
  myProjects.project.setProjectDueDate("prj1", "2025-12-31")
);
console.log(
  "Project priority: ",
  myProjects.project.getProjectPriority("prj1")
);
console.log(
  "New project priority: ",
  myProjects.project.setProjectPriority("prj1", 2)
);

console.log(
  "Adding new todo to prj1: ",
  myProjects.todo.addTodo("prj1", "prj1-todo1", "Buy 'Two Towers'")
);
console.log(
  "Adding new todo to prj1: ",
  myProjects.todo.addTodo("prj1", "prj1-todo2", "Buy 'Return of the King'")
);
console.log(
  "Adding new todo to prj1: ",
  myProjects.todo.addTodo("prj1", "prj1-todo3", "Read 'Two Towers'")
);
console.log(
  "Adding new todo to prj1: ",
  myProjects.todo.addTodo("prj1", "prj1-todo4", "Read 'Return of the king'")
);
console.log(
  "Adding new todo to prj1: ",
  myProjects.todo.addTodo(
    "prj1",
    "prj1-todo-extra1",
    "Discuss the trilogy with others",
    "extra"
  )
);
console.log(
  "Adding new todo to prj1: ",
  myProjects.todo.addTodo(
    "prj1",
    "prj1-todo-extra2",
    "Watch the extended movie versions and compare",
    "extra"
  )
);
console.log(
  "Return the list of todos from prj1: ",
  myProjects.project.getProjectTodos("prj1")
);
console.log("Return prj1 data: ", myProjects.project.getProject("prj1"));
console.log(
  "Return the label of todo found in project with projectId = 'prj1' and section = 'default'",
  myProjects.todo.getTodoLabel("prj1", "prj1-todo2")
);

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

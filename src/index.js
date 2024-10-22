import "./styles.css";
import { newProject } from "./projects";
import { newTask } from "./tasks";
import { renderProjects } from "./render";
import { trashBttn } from "./trash";

let projectsArray = ["Example Project", ]
let tasks = [
    {
        name: "example task",
        description: "description",
        date: "Date",
        project: "Example Project",
        priority: "medium"
    },
]

renderProjects();
newProject();
newTask();




export {projectsArray, tasks}
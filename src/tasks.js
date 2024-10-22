import { projectsArray } from "./index.js";
import { displayProjects } from "./display.js";
import { projectSelection } from "./projects.js";
import { tasks } from "./index.js";

const taskName = document.getElementById("task-name-input");
const taskDescription = document.getElementById("task-description-input");
const taskProject = document.getElementById("project-select");
const taskDate = document.getElementById("task-date-input");
const taskPriority = document.getElementById("priority")

function newTask () {
    const addTask = document.getElementById("add-task-bttn");
    const taskModal = document.getElementById("task-modal");
    const taskSubmit = document.getElementById("task-submit");
    const taskCancel = document.getElementById("task-cancel");
    

    addTask.addEventListener("click", () => {
        projectSelection();
        taskModal.showModal();
    })
    
    taskSubmit.addEventListener("click", () => {

        const newTask = new task(taskName.value, taskDescription.value, taskDate.value, taskProject.value, taskPriority.value);

        tasks.unshift(newTask);

        console.log(tasks)
        
        taskModal.close();

        clearValues();
      
    });
    
    taskCancel.addEventListener("click", () => {
        taskModal.close();
        clearValues();
        
    });
}

function task (name, description, date, project, priority) {
    this.name = name;
    this.description = description;
    this.date = date;
    this.project = project;
    this.priority = priority;
};

function clearValues () {
    taskName.value = "";
    taskDescription.value = "";
    taskDate.value = "";
    taskPriority.value = "";
    taskProject.value = "";


}

export {newTask} 
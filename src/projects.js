import { projectsArray } from "./index.js";
// import { displayProjects } from "./display.js";
import { renderProjects } from "./render.js";

function newProject () {
    const addProject = document.getElementById("add-proj-bttn");
    const projModal = document.getElementById("project-modal");
    const projSubmit = document.getElementById("proj-submit");
    const projCancel = document.getElementById("proj-cancel");
    const projInput = document.getElementById("proj-input")

    addProject.addEventListener("click", () => {
        projModal.showModal();
    })
    
    projSubmit.addEventListener("click", () => {
        projectsArray.push(projInput.value);
        // displayProjects();
        renderProjects();
        console.log(projectsArray);
        projModal.close();
        projInput.value = ""
    });
    
    projCancel.addEventListener("click", () => {
        projModal.close();
        projInput.value = ""
    });
}

function projectSelection () {

    const htmlSelection = document.getElementById("project-select")

    for(let project of projectsArray) {
        const option = document.createElement("option");
        option.textContent = project;
        option.setAttribute("value", project)
        htmlSelection.appendChild(option);

    }
};


export {newProject, projectSelection}
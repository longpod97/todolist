import { projectsArray } from ".";
import { trashBttn } from "./trash";

function renderProjects () {

    const mainContainer = document.getElementById("projects-container");
        while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.lastChild);
        }

    for(let project of projectsArray) {
        
        const projectContainer = document.createElement("div");
        projectContainer.classList.add("container");

        const proj = document.createElement("button");
        proj.classList.add("nav-buttons", "example");
        proj.textContent = `- ${project}`;

       
        const trash = document.createElement("button");
        trash.classList.add("trash")
        trash.innerHTML = `<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clip-rule="evenodd"/>
                            </svg>`

        
        projectContainer.appendChild(proj);
        projectContainer.appendChild(trash);
        mainContainer.appendChild(projectContainer);     
    }

    const projects = document.querySelectorAll(".example")
        projects.forEach((proj, index) => {
            proj.addEventListener("click", (e) => {
                const bigTitle = document.getElementById("title");
    
                bigTitle.textContent = projectsArray[index];
            })
        })

        trashBttn();
}

export {renderProjects}
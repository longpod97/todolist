import { renderProjects } from "./render";
import { projectsArray } from ".";

function trashBttn () {
    const trash = document.querySelectorAll(".trash");

    trash.forEach((bttn, index) => {
        bttn.addEventListener("click", (e) => {

            const project = e.target
            
            projectsArray.splice(index, 1)
            console.log(projectsArray);
            renderProjects();
            
        })
        
        
    })
}

export {trashBttn}
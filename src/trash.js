import { renderProjects, renderTasks } from "./render";
import { projectsArray, tasks } from ".";

function trashBttn () {
    const trash = document.querySelectorAll(".trash");

    trash.forEach((bttn, index) => {
        bttn.addEventListener("click", (e) => {


            // iterates through tasks[] and removes any tasks matching the deleted project
            for (let i = tasks.length - 1; i >= 0; i--) {
                if (tasks[i].project === projectsArray[index]) {
                    tasks.splice(i, 1)
                }
            }
            
            // Removes project from the array
            projectsArray.splice(index, 1)
            console.log(projectsArray);
            renderProjects();
            

            const bigTitle = document.getElementById("title");


            // Sets the bigTitle text to projectsArray[0]
            if (projectsArray.length >= 0) {
            bigTitle.textContent = projectsArray[0]
            } else {
                bigTitle.textContent = "No Projects"
            }

            renderTasks();

            console.log(tasks)
            
        })
        
        
    })
}

export {trashBttn}
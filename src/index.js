import "./styles.css";

const addProject = document.getElementById("add-proj-bttn");
const projModal = document.getElementById("project-modal");
const projSubmit = document.getElementById("proj-submit");
const projCancel = document.getElementById("proj-cancel")

addProject.addEventListener("click", () => {
    projModal.showModal();
})

projSubmit.addEventListener("click", () => {
    projModal.closeModal();
});

projCancel.addEventListener("click", () => {
    closeModal();
});
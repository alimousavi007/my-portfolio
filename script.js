const body = document.querySelector("body");
const darkModeButton = document.querySelector("#dark-mode-toggle");
darkModeButton.addEventListener("click", (e) =>{
    e.preventDefault();
    body.classList.toggle("dark-mode");
});

const allProjectsCard = document.querySelectorAll(".project-card");
allProjectsCard.forEach(card =>{
    card.addEventListener("click", () =>{
        console.log('You clicked on project: ' + card.textContent);
    });
});
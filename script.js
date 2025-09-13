const body = document.querySelector("body");
const darkModeButton = document.querySelector("#dark-mode-toggle");
darkModeButton.addEventListener("click", (e) =>{
    e.preventDefault();
    body.classList.toggle("dark-mode");
});
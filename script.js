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

// ۱. تمام دکمه‌های "نمایش جزئیات" را انتخاب کن
const detailButtons = document.querySelectorAll('.toggle-details-btn');

// ۲. برای هر دکمه یک شنونده رویداد اضافه کن
detailButtons.forEach(button => {
  button.addEventListener('click', () => {
    // ۳. نزدیک‌ترین والد با کلاس 'project-card' را پیدا کن
    const card = button.closest('.project-card');

    // ۴. کلاس 'open' را به آن کارت اضافه یا حذف کن
    card.classList.toggle('open');
  });
});
const skillForm = document.querySelector("#add-skill-form");
const skillInput = document.querySelector("#skill-input");
const skillList = document.querySelector("#skill-list");

skillForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newSkill = skillInput.value.trim();
  if (newSkill) {
    const li = document.createElement("li");
    li.textContent = newSkill;
    skillList.appendChild(li);
    skillInput.value = "";
  }
});

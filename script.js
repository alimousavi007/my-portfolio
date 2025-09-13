const colorButton = document.querySelector("#change-color-btn");
const body = document.querySelector("body");
function changeBackgroundColor() {
  body.style.backgroundColor = '#e0e0e0';
  console.log('رنگ پس‌زمینه تغییر کرد!');
}
colorButton.addEventListener('click', changeBackgroundColor);

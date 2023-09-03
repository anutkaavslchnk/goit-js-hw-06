function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const divBoxes = document.querySelector("#boxes");

function createBoxes(amount) {
  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i++) {
    const newDiv = document.createElement("div");

    newDiv.style.width = `${width}px`;
    newDiv.style.height = `${height}px`;

    newDiv.style.backgroundColor = getRandomHexColor();
    divBoxes.appendChild(newDiv);

    width += 10;
    height += 10;
  }
}
function destroyBoxes() {
  divBoxes.innerHTML = "";
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const divBoxes=document.querySelector("#boxes");
function createBoxes(amount){
  const newDiv=document.createElement("div");
divBoxes.append(newDiv);
}
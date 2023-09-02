const inputName=document.querySelector('#name-input');
const spanOutPut=document.querySelector('#name-output');
inputName.addEventListener("input", handleInput);
function handleInput(event){
    spanOutPut.textContent=event.currentTarget.value || "Anonymous";
}

const input=document.querySelector('#font-size-control');
const span=document.querySelector('#text');

input.addEventListener("input", inputControl);

function inputControl(event){
    span.style.fontSize=event.target.value +'px';   
}
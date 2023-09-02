
const btnMinus=document.querySelector('button[data-action="decrement"]');
const btnPlus=document.querySelector('button[data-action="increment"]');
const span=document.querySelector('#value')
btnMinus.addEventListener("click", timerMinus);
btnPlus.addEventListener("click", timerPlus);

let counterValue=0;
function timerMinus(event){
counterValue-=1;
updateValue();
}
function timerPlus(event){
    counterValue+=1;
    updateValue();
}
function updateValue(){
    span.textContent=counterValue;
}
const inputValidation=document.querySelector('#validation-input');
inputValidation.addEventListener('blur', validationValue);
function validationValue(event){
    const lengthData=parseInt(inputValidation.getAttribute('data-length'));
    
    if(lengthData===inputValidation.value.length){
        inputValidation.classList.remove('invalid');
        inputValidation.classList.add('valid');
    }else{
        inputValidation.classList.remove('valid');
        inputValidation.classList.add('invalid');
       
    }
}
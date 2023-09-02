const form=document.querySelector('.login-form');

form.addEventListener("submit", formLogin);
function formLogin(event){
event.preventDefault();
const email=event.currentTarget.elements.email.value;
const password=event.currentTarget.elements.password.value
if(email===""|| password===""){
    alert("Всі поля повинні бути заповнені!");
}else{
    const { email, password } = event.currentTarget.elements;
const information={
  email:email,
  password:password
};
   
   

console.log(information);
 event.currentTarget.reset();
}
}
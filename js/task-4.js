const form = document.querySelector('.login-form');

form.addEventListener('submit' , submitHandler);

function submitHandler(event){
event.preventDefault();
// console.dir(event.currentTarget);

const {email , password} = event.currentTarget.elements;
// console.log(email.value);
// console.log(password.value);

if (email.value.trim() === '' || password.value.trim() === ''){
   alert(`All form fields must be filled in`);
   return; 
}

const data = {
email : email.value,
password: password.value
}
console.log(data);


event.currentTarget.reset();

}


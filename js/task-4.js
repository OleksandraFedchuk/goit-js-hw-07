const form = document.querySelector('.login-form');

form.addEventListener('submit' , submitHandler);

function submitHandler(event){
event.preventDefault();
// console.dir(event.currentTarget);

const {email , password} = event.currentTarget.elements;
// console.log(email.value);
// console.log(password.value);

const data = {
email : email.value.trim(),
password: password.value.trim()
}
console.log(data);

if (email.value === '' || password.value === ''){
   alert(`All form fields must be filled in`);
}

event.currentTarget.reset();

}


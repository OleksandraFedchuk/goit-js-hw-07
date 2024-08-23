const form = document.querySelector('.login-form');
console.log(form);

form.addEventListener('submit' , submitHandler);

function submitHandler(event){
console.log(event.currentTarget.value);
}


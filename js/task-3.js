const inputUserName = document.querySelector('.js-input');
const outputUserName = document.querySelector('.js-output');


inputUserName.addEventListener('input' , handlerInput);

function handlerInput(event){

const credentials = event.currentTarget.value.trim();

if (credentials === "") {
    outputUserName.textContent = "Anonymus" ; 
} else {
    outputUserName.textContent = credentials;
}
}




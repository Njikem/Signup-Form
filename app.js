const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


form.addEventListener('submit', e => {
//The preventDefault is to ensure that the form doesn't submit if the input is not validated 
 e.preventDefault();

 validateInputs();

 

});


//This is for error message function from html

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}


const setSuccess = element=> {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

//Validate email input
const isValidEmail = email => {

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const validateInputs = () => {

    //Trim() is use because it remove all the wide spaces that the string has
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    //Required field. This is to check if it an empty string or hass some value

      if(usernameValue === '') {
          setError(username, 'Username is required');

      }else {
        setSuccess(username);
      }

      if(emailValue === '') {
        setError(email, 'Email is required');
      }else if (!isValidEmail(emailValue)){
        setError(email, 'Provide a valid email address');
      }else {
        setSuccess(email);
      }

      if(passwordValue === '') {
        setError(password, 'Password is required');
      }else if(passwordValue.length < 8){
        setError(password, 'Password must be at least 8 character');
      }else {
        setSuccess(password);
      }

      if(password2Value === '') {
        setError(password2, 'Password confirm is required');
      }else if(password2Value !== passwordValue){
        setError(password2, "Passowrd doesn't match");
      }else {
        setSuccess(password2);
      }
};
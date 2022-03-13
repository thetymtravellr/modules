const inputField = document.getElementById('email');
const message = document.getElementById('message');

inputField.addEventListener('keyup',() => {
    inputField.style.borderColor = '#a5a5a5'; 
    message.textContent = '';
})

const checkEmail = () => {
    const input = inputField.value;
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(input);
}

const displayMessage = () => {
    const emailStatus = checkEmail();
    if(emailStatus) {
        inputField.style.borderColor = 'green';
        message.style.color = 'green';
        message.textContent = 'Your Email Valid.';
    } else {
        inputField.style.borderColor = 'red'; 
        message.style.color = 'red';
        message.textContent = 'Please Enter A Valid Email!';
    }
}
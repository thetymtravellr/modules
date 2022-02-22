document.getElementById('login-btn').addEventListener('click',function(){
    //get user email
    const emailField = document.getElementById('email');
    const userEmail = emailField.value;
    //get user password
    const passwordField = document.getElementById('password');
    const userPassword = passwordField.value;

    //validation
    if(userEmail == 'sontan@baap.com' && userPassword == 'secret') {
        window.location.href = 'banking.html';
    } else {
        console.log('Invalid Password');
    }
})


function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    
    if(pinString.length == 4) {
        return pin;
    } else {
        return getPin();
    }
}
 
function generatePin() {
    const pin = getPin();
    document.getElementById('pin-showing-field').value = pin;
}

function pinInput(e) {


    const number = e.target.innerText;
    const calc = document.getElementById('pin-field');

    if(isNaN(number)) {
        if(number === 'C') {
            calc.value = '';
        }
    } else {
        const previousCalc = calc.value;
        const newCalc = previousCalc + number;
        calc.value = newCalc;
    }

}

function verifyPin() {
    const pin = document.getElementById('pin-showing-field').value;
    const typedNumbers = document.getElementById('pin-field').value;
    const success = document.getElementById('verification-success');
    const failed = document.getElementById('verification-failed');

    if(pin === typedNumbers) {
        success.style.display = 'block';
        failed.style.display = 'none';
    } else {
        failed.style.display = 'block';
        success.style.display = 'none';
    }
    
}

document.getElementById('generate-btn').addEventListener('click',function() {
    generatePin();
})

document.getElementById('keypad').addEventListener('click',function(e){
pinInput(e);
})

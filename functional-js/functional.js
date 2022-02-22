//function for getting input value

function getInputValue(id) {
    const inputField = document.getElementById(id);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = '';
    return value;
}
// get innertext

function getInnerTextValue(fieldId) {
    const fieldTag = document.getElementById(fieldId);
    const fieldValueInText = fieldTag.innerText;
    const value = parseFloat(fieldValueInText);
    return value;
}
//function for updating the values

function updateValue(id,amount){
    const previousTotal = getInnerTextValue(id);
    const newTotal = previousTotal + amount;
    document.getElementById(id).innerText = newTotal;
}

function updateTotalBalance(amount,isAdding) {
    const previousBalanceText = getInnerTextValue('total-balance');
    let newBalance;
    if(isAdding === true) {
        newBalance = previousBalanceText + amount;
    } else {
        newBalance = previousBalanceText - amount;
    }
    document.getElementById('total-balance').innerText = newBalance;
} 

//handle deposit
document.getElementById('deposit-btn').addEventListener('click',function() {
    const amount = getInputValue('deposit-amount');
    if(amount > 0) {
        updateValue('deposit-total',amount);
        updateTotalBalance(amount,true)
    }
})

// handle withdraw
document.getElementById('withdraw-btn').addEventListener('click',function() {
    const amount = getInputValue('withdraw-amount');
    const balance = getInnerTextValue('total-balance');
    if(amount > 0 && amount <= balance) {
        updateValue('withdraw-total',amount);
        updateTotalBalance(amount,false);
    }

})
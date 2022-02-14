function getInputValue(input) {


        const userInput = document.getElementById(`${input}-amount`);
        const inputAmountText = userInput.value;
        const inputAmount = parseFloat(inputAmountText);
    
        //clear input field
        userInput.value = '';
        return inputAmount;

}

function getCurrentAmount(inputFieldId,inputAmount) {
        
        //get current input
        const inputTotal = document.getElementById(`${inputFieldId}-total`);
        const inputTotalText = inputTotal.innerText;
        const previousInputTotal = parseFloat(inputTotalText);
        inputTotal.innerText = previousInputTotal + inputAmount;
}

function updateBalance(value,type) {
    const totalAmount = document.getElementById('total-balance');
    const totalAmountText = totalAmount.innerText;
    const previousTotalAmount = parseFloat(totalAmountText);

    if(type === 'deposit') {
        totalAmount.innerText = previousTotalAmount + value;
    } else {
        totalAmount.innerText = previousTotalAmount - value;
    }
    
}

document.getElementById('deposit-btn').addEventListener('click',function(){

    // const depositInput = document.getElementById('deposit-amount');
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);

    // //get current deposit
    // const depositTotal = document.getElementById('deposit-total');
    // const depositTotalText = depositTotal.innerText;
    // const previousDepositTotal = parseFloat(depositTotalText);
    // depositTotal.innerText = previousDepositTotal + depositAmount;

    //clear input field
    // depositInput.value = '';

    //update main balance
    // const totalAmount = document.getElementById('total-balance');
    // const totalAmountText = totalAmount.innerText;
    // const previousTotalAmount = parseFloat(totalAmountText);

    // totalAmount.innerText = previousTotalAmount + depositAmount;

    const depositAmount = getInputValue('deposit');
    if(depositAmount > 0) {
        getCurrentAmount('deposit',depositAmount);
        updateBalance(depositAmount,'deposit');
    }

})

document.getElementById('withdraw-btn').addEventListener('click',function(){


    // const withdrawInput = document.getElementById('withdraw-amount');
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);

    // //get current withdraw
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const withdrawTotalText = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(withdrawTotalText);
    // withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

    // //clear input field
    // withdrawInput.value = '';

    //update main balance
    // const totalAmount = document.getElementById('total-balance');
    // const totalAmountText = totalAmount.innerText;
    // const previousTotalAmount = parseFloat(totalAmountText);

    // totalAmount.innerText = previousTotalAmount - withdrawAmount;
    const withdrawAmount = getInputValue('withdraw');
    if(withdrawAmount > 0) {
        getCurrentAmount('withdraw',withdrawAmount);
        updateBalance(withdrawAmount,'withdraw');
    }
})
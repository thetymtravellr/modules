function getInputValue(value){
    const Input = document.getElementById(`${value}-amount`);
    const AmountText = Input.value;
    const Amount = parseFloat(AmountText);
        // clear input area
        Input.value = '';
    return Amount;
}

function updateTotalField(value,amount) {
    const valueTotal = document.getElementById(`${value}-total`);
    const valueTotalText = valueTotal.innerText;
    const previousValueTotal = parseFloat(valueTotalText);
    valueTotal.innerText = amount + previousValueTotal;
}

function getCurrentBalance() {
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceText);
    return totalBalanceAmount;
}

function updateBalance(value,amount) {
    const totalBalance = document.getElementById('total-balance');
    const previousValueTotal = getCurrentBalance();

    if(value === 'deposit') {
        totalBalance.innerText = totalBalanceAmount + amount;
    } else {
        totalBalance.innerText = totalBalanceAmount - amount;
    }
    
}
const depositBtn = document.getElementById('deposit-btn');
const withdrawBtn = document.getElementById('withdraw-btn');

depositBtn.addEventListener('click',function(){
  const depositAmount = getInputValue('deposit');
    // get current deposit
    if(depositAmount > 0 && typeof withdrawAmount == 'number') {
        updateTotalField('deposit',depositAmount);
        updateBalance('deposit',depositAmount);
     }
})

// balance withdraw
withdrawBtn.addEventListener('click', function(){
    const withdrawAmount = getInputValue('withdraw');
    const currentBalance = getCurrentBalance();
    // get current withdraw
    if(withdrawAmount > 0 && withdrawAmount < currentBalance) {
    updateTotalField('withdraw',withdrawAmount);
    updateBalance('withdraw',withdrawAmount);
    }
})
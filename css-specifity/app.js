// main function 

function getValue(inputIdValue){

    const getInput = document.getElementById(inputIdValue).value;

    const getTotal = parseFloat(getInput);

    return getTotal;

}

function getInnerText(inputIdInnerText){

    const getText = document.getElementById(inputIdInnerText).innerText;

    const getTextTotal = parseFloat(getText);

    return getTextTotal;

}

document.getElementById('calculate_btn').addEventListener('click',function(){

    // total Income 

    // const incomeInput = document.getElementById('income_input').value;

    // const totalIncome = parseFloat(incomeInput);

    const totalIncome = getValue('income_input')

    

    // expenses by food 

    // const expensesByFoodInput=document.getElementById('food_input').value;

    // const toTalExpensesByFood=parseFloat(expensesByFoodInput);

    const toTalExpensesByFood = getValue('food_input');

    // expenses by house rent

    // const expensesByRentInput=document.getElementById('rent_input').value;

    // const toTalExpensesByRent=parseFloat(expensesByRentInput);

    const toTalExpensesByRent = getValue('rent_input');

    // expenses by clothes 

    // const expensesByClothesInput=document.getElementById('clothes_input').value;

    // const toTalExpensesByClothes=parseFloat(expensesByClothesInput);

    const toTalExpensesByClothes = getValue('clothes_input');

    // total expenses by food,house rent and clothes

    let totalExpenses = toTalExpensesByFood+toTalExpensesByRent+toTalExpensesByClothes;

    // total expenses from income 

    // let totalExpensesBalance = document.getElementById('total_expenses');

    

    let totalExpensesBalance = getInnerText('total_expenses'); 

    

    totalExpensesBalance = totalExpenses;

    // total balance after expenses 

    const balance = totalIncome - totalExpenses;

    // let totalBalance = document.getElementById('total_balance');

    let totalBalance =getInnerText('total_balance')

    console.log(totalBalance)

    totalBalance = balance;

})


// saving balance section 

document.getElementById('saving_btn').addEventListener('click',function(){

    const incomeInput = document.getElementById('income_input').value;

    const totalIncome = parseFloat(incomeInput);

    const savingInput=document.getElementById('saving_input').value;

    const saving = parseFloat(savingInput);

    const totalSaving = (totalIncome / 100) * saving;

    let savingAmount = document.getElementById('saving_amount');

    savingAmount.innerText = totalSaving;

    // remaining balance 

    const balance = totalIncome - totalExpenses;

    let totalBalance = document.getElementById('total_balance');

    totalBalance.innerText = balance; 

    const remainingBalance = balance - totalSaving;

    

    

})
function updateProductNumber(product , price,isIncreasing) {
    const productInput = document.getElementById(product + '-input');
    let productNumber = productInput.value;

    if(isIncreasing) {
        productNumber = parseInt(productNumber) + 1;
    } else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    } 

    productInput.value = productNumber;

    // update product total 
    const productPrice = document.getElementById(product + '-price');
    productPrice.innerText =  productNumber * price;

    // subtotal
    calculateTotal();

}

//sub total cost, tax and grand total

function getValue(product) {
        const productQuantity = document.getElementById(product + '-input');
        const productNumber = parseInt(productQuantity.value);
        return productNumber;
     
}

function calculateTotal () {
    console.count('get value function')
    const phoneTotal = getValue('phone') * 1219;
    const caseTotal = getValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = Math.round(subTotal / 10);
    const grandTotal = subTotal + tax;
    
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('grand-total').innerText = grandTotal;
}

// handle phone add event listener

document.getElementById('phone-plus').addEventListener('click',function(){
    updateProductNumber('phone', 1219, true);
   
})
document.getElementById('phone-minus').addEventListener('click',function(){
    updateProductNumber('phone',1219,false);
})

// handle case add event listener

document.getElementById('case-plus').addEventListener('click',function(){
    updateProductNumber('case',59,true);
})
document.getElementById('case-minus').addEventListener('click',function(){
    updateProductNumber('case',59,false);
})

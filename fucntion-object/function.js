// FUNCTION DECLARATION

// function turnOnFan() {
//     console.log('Walk Towards The Switch');
//     console.log('Press The Switch');
// }

// CALLING THE FUNCTION

// turnOnFan();

// FUNCTION WITH PARAMETER

function bringSingara(taka) {
    console.log('Singara Anar Jonno Dise ', taka);
    console.log('Mama Singara Den');

    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;

   return singaraQuantity;
}

var money = 250;

var singara = bringSingara(money);

console.log('Ei Nen Singara', singara);
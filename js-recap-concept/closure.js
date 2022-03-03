// const bank = owner => {
//     balance = 0;
//     return amount => {
//         balance += amount;
//         return balance;
//     }
// }

const bank = owner => {
    balance = 0;
    return amount => {
        balance += amount;
        return balance;
    }
}

const myBank = bank('hasan');
myBank(100);
myBank(100);
myBank(100);
myBank(100);
console.log(myBank(200));
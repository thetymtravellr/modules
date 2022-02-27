const kibria = {
    id: 101,
    money: 5000,
    name: 'kibria',
    treatDey: function(expense) {
        this.money -= expense;
        console.log(this);
        return this.money;
    }
}
const heroBalam = {
    id: 102,
    money: 6000,
    name: 'Hero Balam',
}
const normalGolam = {
    id: 103,
    money: 8000,
    name: 'normal golam'
}
kibria.treatDey.call(heroBalam,500);
kibria.treatDey.call(heroBalam,200);
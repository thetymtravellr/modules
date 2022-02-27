const student = {
    id: 101,
    money: 5000,
    name: 'kibria',
    major: 'mathematics',
    subjects: ['english','economics','math 101','calculus'],
    takeExam: function(){
        console.log(`${this.name} giving exam`);
    },
    treatDey: function(expense) {
        this.money -= expense;
        return this.money;
    }
}

student.takeExam();
const treat = student.treatDey(3000);
const treat2 = student.treatDey(500);
console.log(treat2);
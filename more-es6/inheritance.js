class TeamMember {
    name;
    address;
    constructor(name,address){
        this.name = name;
        this.address = address;
    }
}

class Support extends TeamMember{
    designation = 'Support Web Dev';
    groupSupportTime;
        constructor(name,address,time) {
            super(name,address)
            this.groupSupportTime = time;
    }
}
    
class StudentCare extends TeamMember{
    designation = 'Student Care';
    buildRoutine(){
        console.log(`${this.name} Build a Routine`);
    }
}
    
class NeptuneDev extends TeamMember{
    designation = 'Neptune App Dev';
    releaseApp(version){
        console.log(`${this.name} release app ${version}`);
    }
}
const aamir = new Support("aamir",'BD',11);
const salman = new StudentCare('salman','BD',11);
const shahrukh = new NeptuneDev('Shahrukh','CH');
// shahrukh.releaseApp('1.0.1')
// console.log(shahrukh);

function min(nums) { return Math.min(nums) }
console.log(min( [1,3,2 ]))
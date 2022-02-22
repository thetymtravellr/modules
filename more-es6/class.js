class Support {
    name;
    designation = 'Support Web Dev';
    address;
    constructor(name,address){
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(`${this.name} Start A Session`);
    }
}

const aamir = new Support("aamir",'BD');
const salman = new Support("salman",'Dubai');

// aamir.startSession();
// salman.startSession();

class User {
    constructor(name,email,password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

const user1 = new User('Robiul','muhammadrobiul502@gmail.com','imrobiul');
const user2 = new User('Hasan','hasan@gmail.com','imhasan');
const user3 = new User('hridoy','hridoy@gmail.com','imhridoy');
const user4 = new User('munna','munna@gmail.com','immunna');

console.log(user4.password);
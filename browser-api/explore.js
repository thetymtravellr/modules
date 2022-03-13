const name = 15;
const student = {
    name: 'Jolil',
    friend: 'Borsha',
    job: 'Business',
    makeMovie: function (name) {
        console.log(name);
    }
}

student.makeMovie('Din Raat');

const warning = () => {
    alert('Ma Is Coming!!!');
}
const picnic = () => {
    const response = confirm('Are You Going To Picnic?');
    console.log(response);
    if(response) {
        alert('amake fee ta bkash kore de.')
    } else {
        alert('DGM!!! dure giye mor!!!!')
    }
}

const askName = () => {
    const name = prompt('Whats Is Your Name');
    console.log(name);
}
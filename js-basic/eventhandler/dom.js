function makeRed() {
    document.body.style.backgroundColor = "red";
  }
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}
const blueBtn = document.getElementById('blue-btn');

blueBtn.onclick = makeBlue;

const greenBtn = document.getElementById('green-btn');
// handle event using anonymous function
// anonymous function
greenBtn.onclick = function() {
  document.body.style.backgroundColor = 'green';
}

// handle by using by add eventlistener

const goldenRodBtn = document.getElementById('goldenrod-btn');

function makeGoldenRod() {
  document.body.style.backgroundColor = 'goldenrod';
}
goldenRodBtn.addEventListener('click',makeGoldenRod)

// addeventlistener with anonymous function

const hotPinkBtn = document.getElementById('hotpink-btn');

hotPinkBtn.addEventListener('click',function() {
  document.body.style.backgroundColor = 'hotpink';
})

// addevent listener without declaring a variable

document.getElementById('purple-btn').addEventListener('click',function() {
  document.body.style.backgroundColor = 'purple';
});


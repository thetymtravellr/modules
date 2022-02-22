// function setPlayerStyle(player) {
//     player.style.border = '2px solid red'
//     player.style.borderRadius = '16px'
//     player.style.margin = '1rem';
//     player.style.padding = '1rem';
//     player.addEventListener('click',function(){
//         player.style.backgroundColor = 'yellow';
//     })
// }

const players = document.getElementsByClassName('player');
const playersContainer = document.getElementById('players');
playersContainer.addEventListener('click',function(e){
    if(e.target.tagName.toLowerCase() == 'div') {
        e.target.style.backgroundColor = 'red';
    }else {
        e.target.parentNode.style.backgroundColor = 'red';
    }
})

for(const player of players) {
    // setPlayerStyle(player);
 }

function addPlayer(player) {
    const playerContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `
    <h4 class="player-name">New Player</h4>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
      commodi cumque enim corporis sunt earum aliquam. Repellendus, cumque
      omnis praesentium error quas tenetur optio fugiat voluptas amet
      dolor dolorum reiciendis.
    </p>
    `;
    playerContainer.appendChild(player);
    setPlayerStyle(player);
}


 
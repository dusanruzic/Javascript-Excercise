/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, previousTurn, totalToWin;

init();

//document.querySelector("#current-" + activePlayer).textContent = dice;


//anonymous function will be calledwhen click event happenes
//this is fallback function, because we dont call it, but another function.
//This is reason why we can use anonymous function, which is not reusable
document.querySelector('.btn-roll').addEventListener('click', function(){
    var dice = Math.floor(Math.random() * 6) + 1;
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    var dice2 = Math.floor(Math.random() * 6) + 1;
    var diceDOM2 = document.querySelector('.dice2');
    diceDOM2.style.display = 'block';
    diceDOM2.src = 'dice-' + dice2 + '.png';

    if(dice !== 1 && dice2 !== 1){
        if(dice == 6 && dice2 == 6){
            scores[activePlayer] = 0;
            document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
            nextPlayer();
        } else{
            roundScore += dice + dice2;
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
        }
}
    else {
        //NEXT Player
        nextPlayer();        
    }

    previousTurn = dice;
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying){
        //add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;


        //update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        //Check if player won the game
        if(scores[activePlayer] >= totalToWin){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.dice2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
            document.querySelector('.btn-roll').disabled = true;
            document.querySelector('.btn-hold').disabled = true;

        }
        else { 
            //NEXT Player
            nextPlayer();
        }
    }
    


});

function nextPlayer() {
    roundScore = 0;
    previousTurn = 0;
    activePlayer === 1? activePlayer=0: activePlayer=1;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //document.querySelector('player-0-panel' + activePlayer).classList.remove('active');
    //document.querySelector('player-1-panel' + activePlayer).classList.add('active');

    //toggle means that if element has that classs, it will remove it, but if it has not, it will add
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //document.querySelector('.dice').style.display = 'none';
    //document.querySelector('.dice2').style.display = 'none';

};

document.querySelector('.btn-new').addEventListener('click', init);

function init () {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    previousTurn = 0;
    gamePlaying = true;

    totalToWin = document.getElementById('brPoena').value;

    document.querySelector('.btn-hold').disabled = false;
    document.querySelector('.btn-roll').disabled = false;


    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';


    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');
}

scores = [0,0];
currentPlayer = 0;
current = 0;


document.querySelector('.btn-rd').addEventListener('click', function() {
    //dice calulation and current updation
    var dice = Math.floor((Math.random()) * 6 ) + 1;
    document.querySelector('.dice').src = 'dice-' + dice + '.png';
    document.querySelector('.dice').style.display = 'block';

    if (dice !== 1){
        current+= dice;
        document.querySelector('#current-'+currentPlayer).textContent = current;
    }
    else {
        current = 0;
        currentPlayer === 0? currentPlayer = 1 : currentPlayer = 0;
        document.querySelector('#current-0').textContent = 0;
        document.querySelector('#current-1').textContent = 0;
        document.querySelector('#player-0').classList.toggle('adthunadu');
        document.querySelector('#player-1').classList.toggle('adthunadu');
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    scores[currentPlayer] += current; 
    document.querySelector('#score-'+currentPlayer).textContent = scores[currentPlayer];
    
    currentPlayer === 0? currentPlayer = 1 : currentPlayer = 0;
    document.querySelector('#player-0').classList.toggle('adthunadu');
    document.querySelector('#player-1').classList.toggle('adthunadu');
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    current = 0;
});
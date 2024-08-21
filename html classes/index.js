window.addEventListener('DOMContentLoaded', () => {
 const tiles = Array.from (document.querySelectorAll('.tile'));
 const playerDisplay=document.querySelectorAll('.display-player');
 const resetButton= document.querySelectorAll('#reset')
 const announcer=document.querySelectorAll('.announcer')
});

 let board =['','','','','','','','','']
 let currentPlayer='X';
 let isGameActive = true;




 const PLAYERX_WON = 'PLAYERX_WON';
 const PLAYERO_WON = 'PLAYERO_WON';
 const TIE = 'TIE';

 
//Indexes within the board
 
 const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
 ];

 function handleResultValidation(){
    let roundWON = false;
    for (let i = 0; i <= 7; i++ ) {
        const winCondition = winningConditions [i];
        const a = board[winCondition[0]];
        const b = board[winCondition[1]];
        const c = board[winCondition[2]];
        if (a === ''|| b === '' || c === ''){
            continue;
        }
        if (a === b && b === c ) {
            roundWON = true;
            break;
        }
        
    }
 }

 

    if (roundWON) {
        announce(currentplayer === 'X' ? PLAYERX_WON : PLAYERO_WON);
        isGameActive = false;
        return;
    }
    if (! board.includes( '')) 
    announce(TIE);

    const announce = (type) => {
        switch (type){
            case PLAYERO_WON:
                announcer.innerHTML = 'Player <span class="playerO">O</span> WON';
        break;
        case PLAYERX_WON:
                    announcer.innerHTML = 'Player <span class="playerX">X</span> WON'; 
                    case TIE: 
                    announcer.innerText= 'Tie';
        }
        announcer.classList.remove ('hide');
    }; 

    const isValidAction = (title) => {
        if (tile.innerText === 'X' || title.innerText ==='O'){
            return false;
        }
        return true;
    }

    const updateBoard = (index) => {
        board [index] = currentPlayer;
    }

    
 

 const changePlayer = () => {
    playerDisplay.classList.remove (`player$ { currentPlayer }`);
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    playerDisplay.innerText = currentPlayer;
    playerDisplay.classList.add(`player $ {currentPlayer}`);
 }

 const userAction = (tile, index) => {
    if(isValidAction(tile) && isGameActive){
        tile.innerText = currentPlayer;
        tile.classlist.add('player $ { currentPlayer}');
        updateBoard(index);
        handleResultValidation ();
        changePlayer ();
    }
    }


    const  resetBoard = () => {
    board = ['', '', '', '', '', '', '', '', ''];
    isGameActive = true;
    announcer.classList.add('hide');

    if(currentPlayer === 'O') {
        changePlayer();
    }

    tiles.forEach(title => {
        tile.innerText = "";
        tile.classList.remove('playerX');
        tile.classList.remove('playerO');
    });

   }

tiles.forEach((title,index) => {
title.addEventListener ('click', () => UserActivation (tile,index));
});

    resetButton.addEventListener('click',resetBoard);
 
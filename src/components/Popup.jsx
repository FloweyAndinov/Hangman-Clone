import React from 'react'
import checkWin from './helpers';
const Popup = ({correctLetters , wrongLetters , selectedWord , setPlayable}) => {
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;

  if (checkWin(correctLetters,wrongLetters,selectedWord) === 'win') {
    console.log("win");
    finalMessage = 'You win!';
    playable=false;
  }
  else if (checkWin(correctLetters,wrongLetters,selectedWord) === 'lose') {
    console.log("lose");
    finalMessage = 'You lost!';
    finalMessageRevealWord = `The word was '${selectedWord}'` ;
    playable=false;
  }
  return (
    // <!-- Container for final message -->
    <div className="popup-container" style={finalMessage !=='' ? {display:'flex'} : {}} >
      <div class="popup">
        <h2>{finalMessage}</h2>
        <h3 >{finalMessageRevealWord}</h3>
        <button>Play Again</button>
      </div>
    </div>
  )
}

export default Popup
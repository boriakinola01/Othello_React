import React, { useState } from 'react'
import './StartPage.css';

export default function StartPage({ onStartGame }) {

    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (player1 && player2) {
            onStartGame(player1, player2);
        }
    }

  return (
    <div className='Start_page'>
      
      <h1>Othello</h1>

      <form>
        <div>
        <div>
            <label htmlFor=""> Player 1:</label>
            <input type="text" onChange={(e) => {setPlayer1(e.target.value)}} value={player1} required/>
        </div>
        <div>
            <label htmlFor=""> Player 2:</label>
            <input type="text" onChange={(e) => {setPlayer2(e.target.value)}} value={player2} required/>
        </div>
        </div>
        
        <button type='submit' onClick={ handleSubmit } >Start Game</button>
      </form>

      <div>
      <h1>Player 1: {player1}</h1>
      <h1>Player 2: {player2}</h1>
      </div>
    </div>
  )
}

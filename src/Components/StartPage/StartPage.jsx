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
        <div className='player_sections'>
        <div className='player_tile'>
            <label htmlFor=""> Player 1:</label>
            <div className='player2_avi'></div>
            <input type="text" onChange={(e) => {setPlayer1(e.target.value)}} value={player1} required/>
        </div>
        
        <div className='player_tile'>
            <label htmlFor=""> Player 2:</label>
            <div className='player1_avi'></div>
            <input type="text" onChange={(e) => {setPlayer2(e.target.value)}} value={player2} required/>
        </div>
        </div>
        <div className='spacer'></div>
        <button type='submit' onClick={ handleSubmit } >Start Game</button>
      </form>

    </div>
  )
}

import { useState } from 'react';
import './App.css';
import Board from './Components/Board/Board';
import 

function App() {

  const [players, setPlayers] = useState({player1:"", player2: ""});
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartGame = (player1, player2) => {
    setPlayers({player1, player2});
    setGameStarted(true);
  };

  return (
    <div className="App">
      gameStarted ? (

      ) : (
        
      )
    </div>
  );
}

export default App;

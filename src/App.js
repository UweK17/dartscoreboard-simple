import React, {useState} from 'react';
import './App.css';

function App() {
  
  const [throwScorePlayer1, setThrowScorePlayer1] = useState("");
  const [throwScorePlayer2, setThrowScorePlayer2] = useState("");
  const [throwScorePlayer3, setThrowScorePlayer3] = useState("");
  const [throwScorePlayer4, setThrowScorePlayer4] = useState("");
  const [player1Score, setPlayer1Score] = useState(301);
  const [player2Score, setPlayer2Score] = useState(301);
  const [player3Score, setPlayer3Score] = useState(301);
  const [player4Score, setPlayer4Score] = useState(301);

  function handleSubmitPlayer1 (e) {
    e.preventDefault();
    setPlayer1Score(player1Score-throwScorePlayer1);
  }
  function handleSubmitPlayer2 (e) {
    e.preventDefault();
    setPlayer2Score(player2Score-throwScorePlayer2);
  }
  function handleSubmitPlayer3 (e) {
    e.preventDefault();
    setPlayer3Score(player3Score-throwScorePlayer3);
  }
  function handleSubmitPlayer4 (e) {
    e.preventDefault();
    setPlayer4Score(player4Score-throwScorePlayer4);
  }

  function handleChangePlayer1(value) {
    setThrowScorePlayer1(value);
  }
  function handleChangePlayer2(value) {
    setThrowScorePlayer2(value);
  }
  function handleChangePlayer3(value) {
    setThrowScorePlayer3(value);
  }
  function handleChangePlayer4(value) {
    setThrowScorePlayer4(value);
  }

  return (
    <div className="App">
      <div className='partitionScreen'>
        <div className="player1">
          <div className='statistics'>
            <div>Player 1</div>
            <div>Start Score: {player1Score}</div>
            <form onSubmit={handleSubmitPlayer1}>
              <input 
                name="score"
                type="number"
                value={throwScorePlayer1}
                autoFocus
                onChange={e => handleChangePlayer1(e.target.value)}
              />
            </form>
          </div>
        </div>

        <div className="player2">
          <div>Player 2</div>
          <div>Start Score: {player2Score}</div>
            <form onSubmit={handleSubmitPlayer2}>
              <input 
                name="score"
                type="number"
                value={throwScorePlayer2}
                autoFocus
                onChange={e => handleChangePlayer2(e.target.value)}
              />
            </form>
        </div>

        <div className="player3">
          <div>Player 3</div>
          <div>Start Score: {player3Score}</div>
            <form onSubmit={handleSubmitPlayer3}>
              <input 
                name="score"
                type="number"
                value={throwScorePlayer3}
                autoFocus
                onChange={e => handleChangePlayer3(e.target.value)}
              />
            </form>
        </div>

        <div className="player4">
          <div>Player 4</div>
          <div>Start Score: {player4Score}</div>
            <form onSubmit={handleSubmitPlayer4}>
              <input 
                name="score"
                type="number"
                value={throwScorePlayer4}
                autoFocus
                onChange={e => handleChangePlayer4(e.target.value)}
              />
            </form>
        </div>

      </div>
    </div>
  );
}

export default App;

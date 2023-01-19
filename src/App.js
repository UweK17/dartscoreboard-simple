import React, {useState} from 'react';
import './App.css';
// import PlayerButton from './components/PlayerButton.js';
// import SubmitButton from './components/SubmitButton.js';

function App() {
  
  const [throwScorePlayer1, setThrowScorePlayer1] = useState("");
  const [throwScorePlayer2, setThrowScorePlayer2] = useState("");
  const [throwScorePlayer3, setThrowScorePlayer3] = useState("");
  const [throwScorePlayer4, setThrowScorePlayer4] = useState("");
  const [player1Score, setPlayer1Score] = useState(301);
  const [player2Score, setPlayer2Score] = useState(301);
  const [player3Score, setPlayer3Score] = useState(301);
  const [player4Score, setPlayer4Score] = useState(301);
  const [appState, setAppState] = useState({
    activeObject: null,
    objects: [{id: 1},{id: 2},{id: 3},{id: 4}]
  });

  function handleSubmitPlayer1 (e) {
    e.preventDefault();
    setPlayer1Score(player1Score-throwScorePlayer1);
    setThrowScorePlayer1("");
    toggleActive(1);
  }
  function handleSubmitPlayer2 (e) {
    e.preventDefault();
    setPlayer2Score(player2Score-throwScorePlayer2);
    setThrowScorePlayer2("");
    toggleActive(2);
  }
  function handleSubmitPlayer3 (e) {
    e.preventDefault();
    setPlayer3Score(player3Score-throwScorePlayer3);
    setThrowScorePlayer3("");
    toggleActive(3);
  }
  function handleSubmitPlayer4 (e) {
    e.preventDefault();
    setPlayer4Score(player4Score-throwScorePlayer4);
    setThrowScorePlayer4("");
    toggleActive(0);
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

  function toggleActive(index) {
    setAppState({...appState, activeObject: appState.objects[index]})
  }

  function toggleActiveStyle(index) {
    if(appState.objects[index] === appState.activeObject) {
      return "btn active";
    } else {
      return "btn inactive";
    }
  }

   return (
    <div className="App">
      <div className='partitionScreen'>
        <div className={`player1 ${toggleActiveStyle(0)}`} onClick={() =>{toggleActive(0)}}>
          <div className='statistics'>
            <div>Player 1</div>
          {/* <PlayerButton /> */}
            <div>Score: {player1Score}</div>
            <form onSubmit={handleSubmitPlayer1}>
              <input 
                name="score"
                type="number"
                value={throwScorePlayer1}
                autoFocus
                onChange={e => handleChangePlayer1(e.target.value)}
              />
              {/* <SubmitButton /> */}
            </form>
          </div>
        </div>

        <div className={`player2 ${toggleActiveStyle(1)}`} onClick={() =>{toggleActive(1)}}>
          <div className="statistics">
          <div>Player 2</div>
          {/* <PlayerButton /> */}
            <div>Score: {player2Score}</div>
              <form onSubmit={handleSubmitPlayer2}>
                <input
                  name="score"
                  type="number"
                  value={throwScorePlayer2}
                  autoFocus
                  onChange={e => handleChangePlayer2(e.target.value)}
                />
                {/* <SubmitButton /> */}
              </form>
          </div>
        </div>

        <div className={`player3 ${toggleActiveStyle(2)}`} onClick={() =>{toggleActive(2)}}>
          <div className="statistics">
          <div>Player 3</div>
          {/* <PlayerButton /> */}
            <div>Score: {player3Score}</div>
              <form onSubmit={handleSubmitPlayer3}>
                <input
                  name="score"
                  type="number"
                  value={throwScorePlayer3}
                  autoFocus
                  onChange={e => handleChangePlayer3(e.target.value)}
                />
                {/* <SubmitButton /> */}
              </form>
          </div>
        </div>

        <div className={`player4 ${toggleActiveStyle(3)}`} onClick={() =>{toggleActive(3)}}>
          <div className="statistics">
          <div>Player 4</div>
          {/* <PlayerButton /> */}
            <div>Score: {player4Score}</div>
              <form onSubmit={handleSubmitPlayer4}>
                <input
                  name="score"
                  type="number"
                  value={throwScorePlayer4}
                  autoFocus
                  onChange={e => handleChangePlayer4(e.target.value)}
                />
                {/* <SubmitButton /> */}
              </form>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;

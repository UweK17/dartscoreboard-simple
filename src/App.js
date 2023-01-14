import './App.css';

function App() {
  return (
    <div className="App">
      <div className='partitionScreen'>
        <div className="player1">
          <div className='statistics'>
            <div>Player 1</div>
            <div>Start Score: </div>
            <div>Aktueller Score: </div>
          </div>
          <div className="numberInputPlayer1">  
            <button className="numpad">1</button>
            <button className="numpad">2</button>
            <button className="numpad">3</button>
            <button className="numpad">4</button>
            <button className="numpad">5</button>
            <button className="numpad">6</button>
            <button className="numpad">7</button>
            <button className="numpad">8</button>
            <button className="numpad">9</button>
            <button className="numpad">Clear</button>
            <button className="numpad">0</button>
            <button className="numpad">Delete</button>
          </div>
          <div className="scoreSubmit">
            <div className='display'>Display</div>
            <button className="submit">Submit Score</button>
          </div>
        </div>
        <div className="player2">
          <div>Player 2</div>
          <div>Start Score: </div>
          <div>Aktueller Score: </div>
        </div>
        <div className="player3">
          <div>Player 3</div>
          <div>Start Score: </div>
          <div>Aktueller Score: </div>
        </div>
        <div className="player4">
          <div>Player 4</div>
          <div>Start Score: </div>
          <div>Aktueller Score: </div>
        </div>
      </div>
    </div>
  );
}

export default App;

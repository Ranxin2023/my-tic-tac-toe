import { useState } from 'react';
import './App.css';
// var boardSize = 3
function OptionSquare({ value, onSquareClick, selected }) {
  return (
    <button className={`option-square ${selected ? 'red' : 'green'}`} onClick={onSquareClick} > {value}</button >
  )
}
function BoardSquare({ value, onSquareClick }) {
  return (
    <button className='board-square' onClick={onSquareClick}>{value}</button>

  )
}
function Option({ optionList, onClick }) {
  return (
    <div className='board-row'>
      <OptionSquare
        value="3*3"
        onSquareClick={() => onClick(3)}
        selected={optionList[0]}
      ></OptionSquare>
      <OptionSquare
        value="4*4"
        onSquareClick={() => onClick(4)}
        selected={optionList[1]}
      ></OptionSquare>
      <OptionSquare
        value="5*5"
        onSquareClick={() => onClick(5)}
        selected={optionList[2]}
      ></OptionSquare>
    </div>
  );
}
function Board({ xIsNext, squares, onPlay, boardSize }) {
  function handleClick(i) {
    if (calculateWinnner(squares) || squares[i]) {
      return
    }
    const nextSquares = squares.slice()
    if (xIsNext) {
      nextSquares[i] = 'X'
    }
    else {

      nextSquares[i] = 'O'
    }
    onPlay(nextSquares)
  }
  const winner = calculateWinnner(squares, boardSize)
  let status;
  if (winner) {
    status = "Winner: " + winner
  }
  else {
    status = "Next Player: " + (xIsNext ? 'X' : 'O')
  }
  if (boardSize == 3) {
    return (
      <>
        <div className='status'>{status}</div>
        <div className='board-row'>
          <BoardSquare value={squares[0]} onSquareClick={() => handleClick(0)}></BoardSquare>
          <BoardSquare value={squares[1]} onSquareClick={() => handleClick(1)}></BoardSquare>
          <BoardSquare value={squares[2]} onSquareClick={() => handleClick(2)}></BoardSquare>
        </div>
        <div className='board-row'>
          <BoardSquare value={squares[3]} onSquareClick={() => handleClick(3)}></BoardSquare>
          <BoardSquare value={squares[4]} onSquareClick={() => handleClick(4)}></BoardSquare>
          <BoardSquare value={squares[5]} onSquareClick={() => handleClick(5)}></BoardSquare>
        </div>
        <div className='board-row'>
          <BoardSquare value={squares[6]} onSquareClick={() => handleClick(6)}></BoardSquare>
          <BoardSquare value={squares[7]} onSquareClick={() => handleClick(7)}></BoardSquare>
          <BoardSquare value={squares[8]} onSquareClick={() => handleClick(8)}></BoardSquare>

        </div>
      </>
    )
  }
  if (boardSize == 4) {
    return (
      <>
        <div className='status'>{status}</div>
        <div className='board-row'>
          <BoardSquare value={squares[0]} onSquareClick={() => handleClick(0)}></BoardSquare>
          <BoardSquare value={squares[1]} onSquareClick={() => handleClick(1)}></BoardSquare>
          <BoardSquare value={squares[2]} onSquareClick={() => handleClick(2)}></BoardSquare>
          <BoardSquare value={squares[3]} onSquareClick={() => handleClick(3)}></BoardSquare>
        </div>
        <div className='board-row'>

          <BoardSquare value={squares[4]} onSquareClick={() => handleClick(4)}></BoardSquare>
          <BoardSquare value={squares[5]} onSquareClick={() => handleClick(5)}></BoardSquare>
          <BoardSquare value={squares[6]} onSquareClick={() => handleClick(6)}></BoardSquare>
          <BoardSquare value={squares[7]} onSquareClick={() => handleClick(7)}></BoardSquare>
        </div>
        <div className='board-row'>
          <BoardSquare value={squares[8]} onSquareClick={() => handleClick(8)}></BoardSquare>
          <BoardSquare value={squares[9]} onSquareClick={() => handleClick(9)}></BoardSquare>
          <BoardSquare value={squares[10]} onSquareClick={() => handleClick(10)}></BoardSquare>
          <BoardSquare value={squares[11]} onSquareClick={() => handleClick(11)}></BoardSquare>
        </div>
        <div className='board-row'>
          <BoardSquare value={squares[12]} onSquareClick={() => handleClick(12)}></BoardSquare>
          <BoardSquare value={squares[13]} onSquareClick={() => handleClick(13)}></BoardSquare>
          <BoardSquare value={squares[14]} onSquareClick={() => handleClick(14)}></BoardSquare>
          <BoardSquare value={squares[15]} onSquareClick={() => handleClick(15)}></BoardSquare>
        </div>
      </>
    )
  }
  if (boardSize == 5) {
    return (
      <>
        <div className='status'>{status}</div>
        <div className='board-row'>
          <BoardSquare value={squares[0]} onSquareClick={() => handleClick(0)}></BoardSquare>
          <BoardSquare value={squares[1]} onSquareClick={() => handleClick(1)}></BoardSquare>
          <BoardSquare value={squares[2]} onSquareClick={() => handleClick(2)}></BoardSquare>
          <BoardSquare value={squares[3]} onSquareClick={() => handleClick(3)}></BoardSquare>
          <BoardSquare value={squares[4]} onSquareClick={() => handleClick(4)}></BoardSquare>
        </div>
        <div className='board-row'>

          <BoardSquare value={squares[5]} onSquareClick={() => handleClick(5)}></BoardSquare>
          <BoardSquare value={squares[6]} onSquareClick={() => handleClick(6)}></BoardSquare>
          <BoardSquare value={squares[7]} onSquareClick={() => handleClick(7)}></BoardSquare>
          <BoardSquare value={squares[8]} onSquareClick={() => handleClick(8)}></BoardSquare>
          <BoardSquare value={squares[9]} onSquareClick={() => handleClick(9)}></BoardSquare>
        </div>
        <div className='board-row'>
          <BoardSquare value={squares[10]} onSquareClick={() => handleClick(10)}></BoardSquare>
          <BoardSquare value={squares[11]} onSquareClick={() => handleClick(11)}></BoardSquare>
          <BoardSquare value={squares[12]} onSquareClick={() => handleClick(12)}></BoardSquare>
          <BoardSquare value={squares[13]} onSquareClick={() => handleClick(13)}></BoardSquare>
          <BoardSquare value={squares[14]} onSquareClick={() => handleClick(14)}></BoardSquare>
        </div>
        <div className='board-row'>
          <BoardSquare value={squares[15]} onSquareClick={() => handleClick(15)}></BoardSquare>
          <BoardSquare value={squares[16]} onSquareClick={() => handleClick(16)}></BoardSquare>
          <BoardSquare value={squares[17]} onSquareClick={() => handleClick(17)}></BoardSquare>
          <BoardSquare value={squares[18]} onSquareClick={() => handleClick(18)}></BoardSquare>
          <BoardSquare value={squares[19]} onSquareClick={() => handleClick(19)}></BoardSquare>
        </div>
        <div className='board-row'>
          <BoardSquare value={squares[20]} onSquareClick={() => handleClick(20)}></BoardSquare>
          <BoardSquare value={squares[21]} onSquareClick={() => handleClick(21)}></BoardSquare>
          <BoardSquare value={squares[22]} onSquareClick={() => handleClick(22)}></BoardSquare>
          <BoardSquare value={squares[23]} onSquareClick={() => handleClick(23)}></BoardSquare>
          <BoardSquare value={squares[24]} onSquareClick={() => handleClick(24)}></BoardSquare>
        </div>
      </>
    )
  }
}

function calculateWinnner(squares, boardSize) {
  const lines = []
  for (let i = 0; i < boardSize; i++) {
    let line = []
    for (let j = 0; j < boardSize; j++) {
      line.push(i * boardSize + j)
    }
    lines.push(line)
  }
  for (let j = 0; j < boardSize; j++) {
    let line = []
    for (let i = 0; i < boardSize; i++) {
      line.push(i * boardSize + j)
    }
    lines.push(line)
  }
  let line = []
  for (let i = 0; i < boardSize; i++) {
    line.push(i * boardSize + i)
  }
  lines.push(line)
  line = []
  for (let i = 0; i < boardSize; i++) {
    line.push(i + boardSize + (boardSize - i - 1))
  }
  lines.push(line)
  for (const line of lines) {
    const idx = line[0]
    var lineEqual = true
    for (let i = 1; i < line.length; i++) {
      if (squares[line[i]] != squares[idx]) {
        lineEqual = false
        break
      }
    }
    if (squares[idx] && lineEqual) {
      return squares[idx]
    }
  }
  return null
}
export default function Game() {
  const [optionList, setOptionList] = useState([true, false, false])
  const [currentMove, setCurrentMove] = useState(0)
  const [boardSize, setBoardSize] = useState(3)
  const [history, setHistory] = useState([Array(boardSize * boardSize).fill(null)])
  const xIsNext = currentMove % 2 === 0
  const currentSquares = history[currentMove]
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
  }
  function handleOption(newBoardSize) {
    setOptionList(optionList.map((_, index) => index === newBoardSize - 3));
    setHistory([Array(newBoardSize * newBoardSize).fill(null)]);
    setCurrentMove(0);
    setBoardSize(newBoardSize)
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  function handleBack() {
    if (currentMove > 0) {
      const nextHistory = [...history.slice(0, currentMove)]
      setHistory(nextHistory)
      setCurrentMove(nextHistory.length - 1)
    }
  }

  function reset() {
    setHistory([Array(boardSize * boardSize).fill(null)])
    setCurrentMove(0)
  }
  return (
    <div className='game'>
      <div className='game-option'>
        <Option optionList={optionList} onClick={handleOption}></Option>
      </div>
      <button className='game-back' onClick={handleBack}>Back</button>
      <button className='game-back' onClick={reset}>Reset</button>
      <div className='game-board'>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} boardSize={boardSize}></Board>
      </div>
      <div className='game-info'>
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

// export default Game;
